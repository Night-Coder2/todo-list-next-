// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Gpio } from 'onoff'

export default function Led(req, res) {
  function readStateWeb(state){
    if (state == 'on'){
        return 'on'
    }
    else if (state == 'off'){
        return 'off'
    }
  };
  const led = new Gpio(4, 'out')
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rpi led server</title>
        <style>
            .on {
            background-color: red; /* Green */
            border: none;
            color: white;
            padding: 32px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            }
            .off {
            background-color: black; /* Green */
            border: none;
            color: white;
            padding: 32px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            }
            </style>
    </head>
    <body>
        <h1>RPi led server</h1>
        <p> <button class="on" onclick="window.location='/api/led?state=on';" value="click here" width="40px" >on</button>   <button class="off" onclick="window.location='/api/led?state=off';" value="click here" width="40px" >off</button></p>
        <h3>led is ${readStateWeb(req.query.state)}</h3>
        <p><a href="/">return to home</a></p>
    </body>
    </html>
  `)
  if (req.query.state == 'on'){
    led.writeSync(1)
    res.status(201)
  }
  else if (req.query.state =='off') {
    led.writeSync(0)
    res.status(201)

  }
}
