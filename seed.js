const Player = require('./models/players')
const Team = require('./models/teams')

Player.find({}).remove(() => {
  Team.find({}).remove(() => {
    let kobe = Player.create({
      name: 'Kobe Bryant',
      number: '24'
     
    }).then(player => {
      Promise.all([
        Team.create({
          team_Name: 'Lakers',
          city: 'Los Angeles'
          
        }).then(team => {
          player.team.push(team)
        }),
        Team.create({
            Team_name: 'Lakers',
            city: 'Los Angeles'
            
        }).then(team => {
          player.teams.push(team)
        })
      ]).then(() => {
        player.save()
      })
    })
    let Lebron = Player.create({
      name: 'Lebron James',
      number: "23"
      
    }).then(player => {
      Promise.all([
        Team.create({
          team_Name: 'Cavaliers',
          city: 'Cleveland'
        }).then(team => {
          player.teams.push(team)
        })
      ]).then(() => {
        player.save()
      })
    })
    let Damien = Player.create({
        name: 'Damien Lillard',
        number: "0"
    }).then(player => {
      Promise.all([
        Team.create({
            team_Name: 'Trailblazers',
            city: 'Portland'
        }).then(team => {
          player.teams.push(team)
        })
      ]).then(() => {
        player.save()
      })
    })
  })
})
