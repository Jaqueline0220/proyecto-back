const { Schema, model } = require('mongoose');

const vocabularyDetailchema = new Schema(
  {
    idVocabulary: {
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
    rutaImg: {
      type: String,
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

const VocabularyDetail = model('VocabularyDetail', vocabularyDetailchema);

module.exports = VocabularyDetail;
