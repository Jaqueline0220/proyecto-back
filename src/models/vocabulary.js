const { Schema, model } = require('mongoose');

const vocabularySchema = new Schema(
  {
    idCorePersona: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },

    detalle: {
      type: String,
    },
    observacion: {
      type: String,
    },
    numeroRepeticiones: {
      type: Number,
    },
    numeroPracticas: {
      type: Number,
    },
    aprendido: {
      type: Boolean,
    },
    estado: {
      type: String,
    },
    fechaCreacion: {
      type: Date,
    },
    fechaModificacion: {
      type: Date,
    },
    idUsuarioCreacion: {
      type: String,
    },
    idUsuarioModificacion: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Vocabulary = model('Vocabulary', vocabularySchema);

module.exports = Vocabulary;
