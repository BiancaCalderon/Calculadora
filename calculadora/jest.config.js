module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.js'],
  setupFiles: ['./jest.setup.js'], 
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Permite importar archivos CSS con Jest
  },
  testPathIgnorePatterns: ['<rootDir>/.next/'], // Añadir esta línea para ignorar el directorio .next
};
