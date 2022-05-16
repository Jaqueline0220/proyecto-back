const { Schema, model } = require('mongoose');

const vocabularySchema = new Schema(
  {
    idCorePersona: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    observacion: {
      type: String,
      required: true,
    },
    numeroRepeticiones: {
      type: Number,
      required: true,
    },
    numeroPracticas: {
      type: Number,
      required: true,
    },
    Aprendido: {
      type: Boolean,
      required: true,
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
