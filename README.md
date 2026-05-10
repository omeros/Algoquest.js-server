# Algoquest.js — Server

A Node.js/Express backend that exposes a single API endpoint for solving a **geometric rectangle problem**: given a main rectangular area and a list of obstacle rectangles inside it, find the **largest empty rectangle** that fits within the main area without overlapping any obstacle.

> Originally written in Java by Omer Golan, ported to JavaScript.

---

## The Problem

Imagine a large rectangle (the "main bound") containing several smaller obstacle rectangles (the "bounds"). The goal is to find the largest rectangular region inside the main bound that is completely free — not overlapping any obstacle.

```
+-------------------------------------+
|           main bound                |
|                                     |
|   +--+        +-----+               |
|   |  | obstacle|     | obstacle     |
|   +--+        +-----+               |
|                                     |
|        [ FIND THIS ]                |
|   +-------------------------+       |
|   |  largest empty rect     |       |
|   +-------------------------+       |
|                                     |
+-------------------------------------+
```

---

## Algorithm Explanation

The algorithm lives in [services/Algoquest.js](services/Algoquest.js) and works in three stages.

### Stage 1 — `findMax` (Recursive Quadtree Decomposition)

The main area is recursively split into four equal quadrants (top-left, top-right, bottom-left, bottom-right), like a quadtree. For each quadrant:

- If the quadrant is **completely clear** (no obstacles touch it) → add it as a candidate rectangle.
- If the quadrant is **completely blocked** (fully covered by obstacles) → discard it (return `null`).
- Otherwise → recurse deeper, splitting into four sub-quadrants.

Recursion bottoms out when the area is 1×1 pixel or smaller.

### Stage 2 — `unitTheGroup` (Merging Quadrant Results)

After recursing, each of the four quadrants returns a `BoundList` of candidate rectangles. `unitTheGroup` combines these four lists into one by trying to **merge adjacent candidates** across quadrant boundaries:

- Combines left-quadrant results with right-quadrant results (horizontal merging).
- Combines top-quadrant results with bottom-quadrant results (vertical merging).
- Then merges the two combined groups.
- Handles all cases where any subset of the four quadrants returned `null`.

The merging logic (`addNode` in `BoundNode`) extends a rectangle in the direction of an adjacent rectangle if their shared edge aligns — growing the candidate as large as possible.

### Stage 3 — `findTheMaxBound` (Pick the Winner)

Walks the final `BoundList` of all candidate rectangles and returns the one with the largest area (`width × height`).

---

## Key Helper Methods

| Method | Where | What it does |
|---|---|---|
| `ereaIsClear(l,r,t,b, shapes)` | `Algoquest` | Returns `true` if no obstacle overlaps the given rectangle. Checks all 7 intersection cases. |
| `ereaIsBlock(l,r,t,b, shapes)` | `Algoquest` | Returns `true` if the given rectangle is completely covered. Recursively subdivides to verify. |
| `coordinatesInShap(l,r,t,b, shapes)` | `Algoquest` | Returns `true` if the entire rectangle sits inside a single obstacle. |
| `addNode(other)` | `BoundNode` | Tries to extend `this` rectangle by merging with an adjacent `other` rectangle (4 directional cases + containment). |
| `combine(otherList)` | `BoundList` | Appends all nodes from another list into this list, triggering `addNode` merging on each. |
| `refresh()` | `BoundList` | Runs `addNode` between every pair of nodes in the list to maximally merge all candidates. |
| `unit(otherList)` | `BoundList` | Chains two lists end-to-end (no merging). |
| `copyList()` | `BoundList` | Deep-copies a list so it can be merged independently in multiple directions. |

---

## Data Structures

### `Bound` — [services/Bound.js](services/Bound.js)

A rectangle defined by four coordinates:

```
left (L) ──────────────── right (R)
    |                          |
   top (T)               top (T)
    |                          |
bottom (B)            bottom (B)
```

Fields: `L`, `R`, `T`, `B`
Key method: `getSize()` returns `(T - B) * (R - L)` — the area.

### `BoundNode` — [services/BoundNode.js](services/BoundNode.js)

A linked-list node wrapping one `Bound`. Carries:
- `myBound` — the rectangle
- `next` — pointer to the next node
- `size` — cached area, updated when the bound is extended
- `added` — a flag (`0` or `1`) used during merging to avoid double-counting a rectangle that was absorbed into another

### `BoundList` — [services/BoundList.js](services/BoundList.js)

A singly-linked list of `BoundNode`s. The main container for candidate rectangles at each level of the recursion.

---

## Project Structure

```
algoquest.js-server/
├── app.js                     # Express app setup, CORS, route registration
├── bin/www                    # HTTP server entry point
├── routes/
│   ├── algoquest.js           # POST /api/algoquest  →  boundController.run
│   ├── index.js               # GET  /api/
│   └── users.js               # GET  /api/users
├── controllers/
│   └── boundController.js     # Parses request, calls algorithm, sends response
├── services/
│   ├── Algoquest.js           # Core algorithm (findMax, ereaIsClear, ereaIsBlock, …)
│   ├── Bound.js               # Rectangle data class
│   ├── BoundNode.js           # Linked-list node (holds a Bound, merges with neighbors)
│   └── BoundList.js           # Linked list of BoundNodes
├── public/                    # Static assets
└── package.json
```

---

## API

### `POST /api/algoquest`

Finds the largest empty rectangle inside a main bound, avoiding a list of obstacles.

**Request body:**

```json
{
  "mainBound": {
    "left": 0,
    "right": 800,
    "up": 600,
    "down": 0
  },
  "bounds": [
    { "left": 100, "right": 200, "up": 400, "down": 300 },
    { "left": 400, "right": 600, "up": 500, "down": 200 }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `mainBound` | object | The outer search area |
| `mainBound.left` | number | Left edge (x-axis) |
| `mainBound.right` | number | Right edge (x-axis) |
| `mainBound.up` | number | Top edge (y-axis) |
| `mainBound.down` | number | Bottom edge (y-axis) |
| `bounds` | array | List of obstacle rectangles (same shape as `mainBound`) |

**Response:**

```json
{
  "left": 0,
  "right": 800,
  "up": 300,
  "down": 0
}
```

Returns the coordinates of the largest clear rectangle found.

---

## Running the Server

```bash
# Install dependencies
npm install

# Start (production)
npm start

# Start with auto-reload (development)
npm run dev
```

The server runs on port `3000` by default.

**Allowed CORS origins:**
- `http://localhost:8080`
- `http://127.0.0.1:8080`
- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `http://localhost:3001`

---

## Author

Omer Golan
