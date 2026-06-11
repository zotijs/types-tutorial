# Types Tutorial

This project is structured as a **sequence of Git branches**, each representing a **single learning step**.

Every branch contains:

1. **The solution to the previous exercise**
2. **The problem statement for the next exercise**
3. **Starter code** for the next exercise
4. A growing collection of **TypeScript utilities** you build step‑by‑step

By the end, you will have created a **fully‑featured advanced TypeScript utility library**, including:

- Deep type transformations
- Conditional types
- Recursive types
- Template literal types
- Type‑level algorithms
- Higher‑order type utilities

---

## 🧭 How This Tutorial Works

Each branch follows the same structure:

```
branch-name/
  README.md
  src/
    narrow-types.ts
```

Each files contains the instructions for the current step, along with the starter code.

---

## 🌿 Branch Workflow

You progress by **checking out the next branch**:

```
git checkout 01-narrowing-basics
git checkout 02-typeof-narrowing
git checkout 03-truthiness-narrowing
...
```

Each branch contains:

- The **solution** to the previous branch
- The **new problem** you must solve
- The **starter code** for that problem

Once you solve the problem, you move to the next branch to compare your solution.

---

## 📂 Branch Progression

Here’s the full sequence of branches:

1. `01-narrowing-basics`
2. `02-typeof-narrowing`
3. `03-truthiness-narrowing`
4. `04-equality-narrowing`
5. `05-in-and-instanceof-narrowing`
6. `06-exhaustiveness-never`
7. `07-generic-constraints-requirekeys`
8. `08-mapped-types-deeppartial`
9. `09-conditional-types-isnever`
10. `10-infer-returntypeorpromise`
11. `11-template-literals-eventname`
12. `12-tuple-to-union-and-deepreadonly`
13. `13-type-guard-factory`
14. `14-deepmerge-and-omitnever`
15. `15-uniontointersection-and-flatten`
16. `16-filter-and-split`
17. `17-pathvalue-and-add`
18. `18-final-library`

Each branch introduces **one new concept**, and the difficulty increases gradually.

---

## 🚀 How to Use This Tutorial

### 1. Clone the repository

```
git clone <repo-url>
cd <repo-folder>
```

### 2. Checkout the first branch

```
git checkout 01-narrowing-basics
```

### 3. Open `src/<concept>.ts`

Read the problem description and implement the solution.

### 4. Test your solution

You can use any test runner (Vitest, Jest) or simple manual tests.

### 5. Move to the next branch

```
git checkout 02-typeof-narrowing
```

This branch contains:

- Your expected solution
- The next challenge

### 6. Repeat until the final library is complete

---

## 🎯 Learning Goals

By completing this tutorial, you will:

- Master **TypeScript narrowing**
- Understand **control flow analysis**
- Build confidence with **generic constraints**
- Use **mapped types** to transform structures
- Apply **conditional types** to express logic
- Use **infer** to extract types dynamically
- Manipulate **tuples**, **unions**, and **intersections**
- Build **recursive type utilities**
- Implement **type‑level algorithms**
- Assemble a **production‑ready utility library**

---

## 🧩 Final Output

At the end of the tutorial, you will have a complete library containing utilities like:

- `DeepMerge`
- `DeepPartial`
- `DeepReadonly`
- `UnionToIntersection`
- `Flatten`
- `Filter`
- `Split`
- `PathValue`
- `Add`
- `RequireKeys`
- `IsNever`
- `ReturnTypeOrPromise`
- `EventName`
- `TupleToUnion`
- `createGuard`

All built **incrementally**, with each concept introduced at the right time.
