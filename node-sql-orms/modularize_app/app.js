const db = require('./db');

const { Lecture } = db.models; // destructure lecture model

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    await Lecture.create({
      title: ''
    });

    await Lecture.create({
      title: 'Usidhulumu wazazi',
      onYoutube: true,
    });

  } catch (error) {
    console.error(error)
  }
});
