# WORKFLOW SEMINAR VIBECODING HIMTI UMT

## Tema Utama

**From Business Problem to Production App Using AI**

---

# Tujuan Seminar

Setelah mengikuti seminar, peserta mampu:

* Memahami konsep Vibecoding secara benar.
* Memahami workflow pengembangan software modern berbasis AI.
* Menyusun dokumentasi sebelum coding.
* Menggunakan AI sebagai Planner dan Executor.
* Melakukan audit terhadap hasil AI.
* Menghasilkan MVP dari sebuah masalah bisnis nyata.

---

# Core Mindset

Vibecoding bukan:

Idea
↓
Prompt
↓
Aplikasi Jadi

Vibecoding adalah:

Business Problem
↓
Planning
↓
Documentation
↓
AI Execution
↓
Human Review
↓
Deployment

---

# MASTER WORKFLOW

Business Problem
↓
PRD
↓
Scope
↓
Design
↓
Task Breakdown
↓
AI Execution
↓
Review
↓
Testing
↓
Deployment

---

# BAGIAN 1 — PENGENALAN VIBECODING

## Tujuan

Menyamakan persepsi peserta mengenai AI dan Vibecoding.

## Materi

### Evolusi Software Development

Traditional Development
↓
AI Assisted Development
↓
Agentic Development
↓
Autonomous Development

### Landscape AI Saat Ini

#### AI Builder

* Lovable
* Bolt
* v0
* Firebase Studio

#### AI Assistant

* GitHub Copilot
* Cursor
* VS Code AI

#### AI Agent

* Antigravity
* Claude Code
* Gemini CLI
* OpenCode

#### Autonomous Agent

* Devin
* Codex
* SWE Agent

---

# BAGIAN 2 — BUSINESS PROBLEM DISCOVERY

## Tujuan

Mengajarkan bahwa software lahir dari masalah bisnis.

## Aktivitas

Buka Google Maps.

Cari bisnis sekitar.

Contoh:

* Padel Court
* Coffee Shop
* Laundry
* Barbershop
* Coworking Space

Pilih satu bisnis.

---

## Contoh Studi Kasus

### Padel Court

Masalah:

* Booking masih melalui WhatsApp
* Jadwal bentrok
* Tidak ada kalender booking
* Tidak ada dashboard admin
* Sulit melihat histori peminjaman

Output:

Business Problem Statement

---

# BAGIAN 3 — PRD (PRODUCT REQUIREMENT DOCUMENT)

## Tujuan

Menjelaskan produk yang akan dibangun.

## Template

### Product Overview

Nama Produk

### Problem

Masalah yang ingin diselesaikan.

### Goals

Tujuan produk.

### Users

* Customer
* Admin

### Features

* Booking Lapangan
* Kalender Jadwal
* Dashboard Admin
* Riwayat Booking

Output:

PRD.md

---

# BAGIAN 4 — SCOPE

## Tujuan

Membatasi AI agar tidak over-engineering.

## Template

### In Scope

* Login
* Booking
* Kalender
* Dashboard

### Out Scope

* Mobile App
* Payment Gateway
* WhatsApp Integration
* AI Recommendation

Output:

SCOPE.md

---

# BAGIAN 5 — DESIGN

## Tujuan

Menjelaskan bentuk aplikasi.

Tidak fokus pada visual.

Fokus pada struktur.

## Template

### Pages

* Login
* Dashboard
* Booking Form
* Calendar
* History

### User Flow

Login
↓
Booking
↓
Approval
↓
History

### Database Concept

User
Booking
Schedule

Output:

DESIGN.md

---

# BAGIAN 6 — TASK BREAKDOWN

## Tujuan

Membantu Agent memahami urutan pekerjaan.

## Template

### Phase 1

Project Setup

### Phase 2

Authentication

### Phase 3

Booking System

### Phase 4

Dashboard

### Phase 5

Testing

Output:

TASK.md

---

# BAGIAN 7 — AGENTIC DEVELOPMENT

## Tujuan

Memperlihatkan workflow AI modern.

---

## Role 1 — Planner

Tool:

* Antigravity Chat
* ChatGPT
* Claude

Input:

Business Problem

Output:

* PRD.md
* SCOPE.md
* DESIGN.md
* TASK.md

---

## Role 2 — Executor

Tool:

* Antigravity IDE

Input:

* PRD.md
* SCOPE.md
* DESIGN.md
* TASK.md

Output:

* Frontend
* Backend
* Database
* API

---

## Workflow Agent

Specification
↓
Planning
↓
Implementation
↓
Refactor
↓
Testing

---

# BAGIAN 8 — HUMAN REVIEW

## Tujuan

Menunjukkan bahwa AI tidak selalu benar.

## Audit Checklist

### Product Review

* Apakah sesuai PRD?
* Apakah sesuai Scope?

### Technical Review

* Struktur folder rapi?
* Naming konsisten?
* Tidak over-engineering?

### Security Review

* Tidak ada secret key hardcoded?
* Input tervalidasi?

### Functionality Review

* Login berjalan?
* Booking berjalan?
* Dashboard berjalan?

Output:

Audit Report

---

# BAGIAN 9 — TESTING

## Tujuan

Validasi fitur utama.

## Happy Path

### Login

Berhasil masuk.

### Booking

Berhasil membuat booking.

### Approval

Berhasil approve booking.

### History

Data tampil dengan benar.

Output:

Testing Result

---

# BAGIAN 10 — DEPLOYMENT

## Tujuan

Membawa aplikasi ke lingkungan publik.

## Contoh Stack

Frontend:

* Vercel

Backend:

* Railway

Database:

* Supabase / Neon

Output:

Live Application

---

# BAGIAN 11 — AI BUILDER DEMO

## Tujuan

Menunjukkan bahwa AI Builder bekerja dari dokumentasi yang sama.

Tools:

* Lovable
* Bolt
* v0

Input:

* PRD.md
* SCOPE.md
* DESIGN.md

Output:

MVP Application

---

# KESIMPULAN SEMINAR

Software Engineering Lama:

Idea
↓
Coding
↓
Deploy

Software Engineering Modern:

Business Problem
↓
PRD
↓
Scope
↓
Design
↓
Task
↓
AI Execution
↓
Review
↓
Testing
↓
Deploy

AI tidak menggantikan Software Engineer.

AI mempercepat Software Engineer yang memiliki workflow yang benar.
