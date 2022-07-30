---
customTheme : "black"
---

# Vitest

---

# What is it?

- Another test runner
- Based on Vite
- Jest API

---

# What is Vite?

- A dev server and bundler
- Heavily uses ESM
- Hot module replacement
- Native Typescript support

---

# Why Vitest?

- Reduce config files
- Vitest UI
- In-Source Testing
- Blazing fast?

---

# Let's see for ourselves

---

# Performance test

- [Comparison of different test runners](https://github.com/EvHaus/jest-vs-jasmine)
- Test project has only few dependencies
- Replicates the same test suite 10 times
- Consists of 210 files and 1420 tests
- [Results from 30.07.2022](https://github.com/EvHaus/jest-vs-jasmine/runs/7504512179?check_suite_focus=true)
- Vitest is with isolation significantly slower
- Without isolation it is faster

---

# TL;DR

- Don't expect it to be ground breaking
- If you already use Vite you could give it a try
- Feels ergonomic and familiar
- But in a very early stage
- Vitest is (currently) very slow with active isolation
- VS Code plugin is a bit buggy
