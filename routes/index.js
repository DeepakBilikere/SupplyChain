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

// Wide Width films

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

router.get('/products/wideWidthFilms/tarpaulins', (req, res, next) => {
  res.render('wideWidthFilms/tarpaulins')
})

// Barrier Film
router.get('/products/barrierFilm/laminationFilm', (req, res, next) => {
  res.render('barrierFilms/laminationFilm')
})

router.get('/products/barrierFilm/vacuumPackagingFilm', (req, res, next) => {
  res.render('barrierFilms/vacuumPackagingFilm')
})

router.get('/products/barrierFilm/evohFilm', (req, res, next) => {
  res.render('barrierFilms/evohFilm')
})

router.get('/products/barrierFilm/liddingFilm', (req, res, next) => {
  res.render('barrierFilms/liddingFilm')
})

router.get('/products/barrierFilm/thermoformingFilm', (req, res, next) => {
  res.render('barrierFilms/thermoformingFilm')
})

router.get('/products/barrierFilm/oilFilm', (req, res, next) => {
  res.render('barrierFilms/oilFilm')
})

router.get('/products/barrierFilm/uhtMilkFilm', (req, res, next) => {
  res.render('barrierFilms/uhtMilkFilm')
})

router.get('/products/barrierFilm/alcoholFilm', (req, res, next) => {
  res.render('barrierFilms/alcoholFilm')
})

//Shrink Film

router.get('/products/shrinkFilm/ldpeShrinkFilm', (req, res, next) => {
  res.render('shrinkFilms/ldpeShrinkFilm')
})

router.get('/products/shrinkFilm/polyolefinShrinkFilm', (req, res, next) => {
  res.render('shrinkFilms/polyolefinShrinkFilm')
})

//Bags and Liners

router.get('/products/bagsAndLiners/peFilmForDunnageBags', (req, res, next) => {
  res.render('bagsAndLiners/peFilmForDunnageBags')
})

router.get('/products/bagsAndLiners/3in1Liners', (req, res, next) => {
  res.render('bagsAndLiners/3in1Liners')
})

router.get('/products/bagsAndLiners/generalPurposeLiners', (req, res, next) => {
  res.render('bagsAndLiners/generalPurposeLiners')
})

//Agriculture Film

router.get('/products/agricultureFilm/greenHouseFilm', (req, res, next) => {
  res.render('agricultureFilm/greenHouseFilm')
})

router.get('/products/agricultureFilm/mulchFilm', (req, res, next) => {
  res.render('agricultureFilm/mulchFilm')
})

router.get('/products/agricultureFilm/pondLiningFilm', (req, res, next) => {
  res.render('agricultureFilm/pondLiningFilm')
})

router.get('/products/agricultureFilm/polytunnelFilm', (req, res, next) => {
  res.render('agricultureFilm/polytunnelFilm')
})

//Stretch Film

router.get('/products/stretchFilm/handWrapStretchFilm', (req, res, next) => {
  res.render('stretchFilm/handWrapStretchFilm')
})

router.get('/products/stretchFilm/machineWrapStretchFilm', (req, res, next) => {
  res.render('stretchFilm/machineWrapStretchFilm')
})

router.get('/products/stretchFilm/preStretchedPEFilm', (req, res, next) => {
  res.render('stretchFilm/preStretchedPEFilm')
})

//Zip lock bags and slider bags

router.get('/products/zipLockBagsAndSliderBags/zipLockBags', (req, res, next) => {
  res.render('zipLockBagsAndSliderBags/zipLockBags')
})

router.get('/products/zipLockBagsAndSliderBags/sliderBags', (req, res, next) => {
  res.render('zipLockBagsAndSliderBags/sliderBags')
})

router.get('/products/zipLockBagsAndSliderBags/attachedZipperBags', (req, res, next) => {
  res.render('zipLockBagsAndSliderBags/attachedZipperBags')
})

router.get('/products/zipLockBagsAndSliderBags/zipperProfile', (req, res, next) => {
  res.render('zipLockBagsAndSliderBags/zipperProfile')
})

router.get('/products/zipLockBagsAndSliderBags/freezerBags', (req, res, next) => {
  res.render('zipLockBagsAndSliderBags/freezerBags')
})


module.exports = router
