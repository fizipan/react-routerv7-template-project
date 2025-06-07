import type { UserConfig } from "@commitlint/types"

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✨ Fitur baru
        "fix", // 🐛 Perbaikan bug
        "docs", // 📚 Perubahan dokumentasi
        "style", // 💄 Format (indentasi, spasi, dll)
        "refactor", // 🔨 Refactor kode (tanpa fitur baru/bugfix)
        "perf", // ⚡️ Peningkatan performa
        "test", // ✅ Tambahan/perubahan pada test
        "chore", // 🔧 Tugas rutin (build, deps, dll)
        "build", // 🏗 Perubahan konfigurasi build
        "ci", // 🤖 Perubahan CI (GitHub Actions, dll)
        "revert", // ⏪ Revert commit
      ],
    ],
    "subject-case": [0], // Nonaktifkan aturan case pada subject
  },
}

export default config
