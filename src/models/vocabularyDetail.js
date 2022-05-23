const { Schema, model } = require('mongoose');

const vocabularyDetailchema = new Schema(
  {
    idVocabulary: {
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
    rutaImg: {
      type: String,
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
