/** @type {import('mongoose').Model} */
const Vocabulary = require('../models/vocabulary');
const VocabularyDetail = require('../models/vocabularyDetail');
const { NotFoundException, BadRequestException } = require('../errors');
const mensaje = require('../helpers/mensajes');

const create = async (req, res, next) => {
  const { body } = req;
  try {
    const existipala = await Vocabulary.findOne({ usuario: body.usuario });
    if (existipala)
      throw new BadRequestException('La palabra o frase ya existe', 'auth');

    const voca = await Vocabulary.create(body);
    const detalle = {
      idVocabulary: voca.id,
      rutaImg: body.rutaImg,
      fechaCreacion: body.fechaCreacion,
      fechaModificacion: body.fechaModificacion,
      idUsuarioCreacion: body.idUsuarioCreacion,
      idUsuarioModificacion: body.idUsuarioModificacion,
    };

    await VocabularyDetail.create(detalle);

    res.status(200).json({
      message: mensaje.registroCorrecto,
      data: voca,
      det: detalle,
    });
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const voca = await Vocabulary.find();
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
    const voca = await Vocabulary.findById(id);
    if (!voca) throw new NotFoundException(mensaje.sinresultados, 'Vocabulary');
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
    const voca = await Vocabulary.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!voca) throw new NotFoundException(mensaje.sinresultados, 'Vocabulary');
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
    const voca = await Vocabulary.findByIdAndDelete(id);
    if (!voca) throw new NotFoundException(mensaje.sinresultados, 'Vocabulary');
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
};
