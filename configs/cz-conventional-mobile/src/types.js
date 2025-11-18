module.exports = {
  types: {
    feat: { description: 'Новый функционал', title: 'Features', emoji: '✨' },

    fix: { description: 'Исправления багов', title: 'Bug Fixes', emoji: '🐛' },
    docs: {
      description: 'Изменения касающие только документации',
      title: 'Documentation',
      emoji: '📚',
    },
    style: {
      description:
        'Изменения не влияющие на работу кода (изменения форматировании кода)',
      title: 'Styles',
      emoji: '💎',
    },
    refactor: {
      description: 'Рефакторинг кода',
      title: 'Code Refactoring',
      emoji: '📦',
    },
    perf: {
      description: 'Изменения по улучшению производительности',
      title: 'Performance Improvements',
      emoji: '🚀',
    },
    test: {
      description: 'Добавление и исправление тестов',
      title: 'Tests',
      emoji: '🚨',
    },
    build: {
      description: 'Изменения касающиеся только системы сборки',
      title: 'Builds',
      emoji: '🛠',
    },
    ci: {
      description: 'Изменения в конфигурации CI/CD',
      title: 'Continuous Integrations',
      emoji: '⚙️',
    },
    chore: {
      description:
        'Другие изменения не затрагивающие исходный код или тестовые файлы',
      title: 'Chores',
      emoji: '♻️',
    },
    revert: { description: 'Реверт комита', title: 'Reverts', emoji: '🗑' },
  },
}
