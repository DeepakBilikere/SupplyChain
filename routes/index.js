var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/products/wideWidthFilms', (req, res, next) => {
  res.render('wideWidthFilms')
})

router.get('/products/tamperProofAndCourierBags', (req, res, next) => {
  res.render('tamperProofAndCourierBags')
})

router.get('/products/barrierFilm', (req, res, next) => {
  res.render('barrierFilm')
})

router.get('/products/vciFilmAntiCorrosionFilm', (req, res, next) => {
  res.render('vciFilmAntiCorrosionFilm')
})

router.get('/products/shrinkFilm', (req, res, next) => {
  res.render('shrinkFilm')
})

router.get('/products/bagsAndLiners', (req, res, next) => {
  res.render('bagsAndLiners')
})

router.get('/products/agricultureFilm', (req, res, next) => {
  res.render('agricultureFilm')
})

router.get('/products/stretchFilm', (req, res, next) => {
  res.render('stretchFilm')
})

router.get('/products/airBubbleFilm', (req, res, next) => {
  res.render('airBubbleFilm')
})

router.get('/products/zipLockBagsAndSliderBags', (req, res, next) => {
  res.render('zipLockBagsAndSliderBags')
})

router.get('/products/ppFlexibleStraws', (req, res, next) => {
  res.render('ppFlexibleStraws')
})

router.get('/products/surfaceProtectionFilm', (req, res, next) => {
  res.render('surfaceProtectionFilm')
})

router.get('/products/wideWidthFilms/peFilmDryBulkContainer', (req, res, next) => {
  res.render('wideWidthFilms/peFilmDryBulkContainer')
})

router.get('/products/wideWidthFilms/peFilmforConductiveDryBulkLiners', (req, res, next) => {
  res.render('wideWidthFilms/peFilmforConductiveDryBulkLiners')
})

router.get('/products/wideWidthFilms/PEFilmforFlexiTanks', (req, res, next) => {
  res.render('wideWidthFilms/PEFilmforFlexiTanks')
})

router.get('/products/wideWidthFilms/geoMembraneFilm', (req, res, next) => {
  res.render('wideWidthFilms/geoMembraneFilm')
})

module.exports = router
