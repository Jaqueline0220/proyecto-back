/** @type {import('mongoose').Model} */
const VocabularyDetail = require('../models/vocabularyDetail');
const { NotFoundException } = require('../errors');
const mensaje = require('../helpers/mensajes');

const create = async (req, res, next) => {
  const { body } = req;
  try {
    const existipala = await VocabularyDetail.create(body);

    res.status(200).json({
      message: mensaje.registroCorrecto,
      data: existipala,
    });
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const voca = await VocabularyDetail.find();
    res.status(200).json({
      message: mensaje.listadoCorrecto,
      data: voca,
    });
  } catch (err) {
    next(err);
  }
};

const getDetailAll = async (req, res, next) => {
  const { id } = req.params;
  try {
    const voca = await VocabularyDetail.find({ idVocabulary: id });
    res.status(200).json({
      message: mensaje.listadoCorrecto,
      data: voca,
    });
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const voca = await VocabularyDetail.findById(id);
    if (!voca)
      throw new NotFoundException(mensaje.sinresultados, 'VocabularyDetail');
    res.status(200).json({
      message: mensaje.objetoEcontrado,
      data: voca,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const voca = await VocabularyDetail.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!voca)
      throw new NotFoundException(mensaje.sinresultados, 'VocabularyDetail');
    res.status(200).json({
      message: mensaje.updateCorrecto,
      data: voca,
    });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const voca = await VocabularyDetail.findByIdAndDelete(id);
    if (!voca)
      throw new NotFoundException(mensaje.sinresultados, 'VocabularyDetail');
    res.status(200).json({
      message: mensaje.deleteCorrecto,
      data: voca,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
  getDetailAll,
};
