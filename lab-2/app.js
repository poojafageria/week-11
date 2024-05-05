const jwt = require('jsonwebtoken');
// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 199,
    username: 'pooja@1',
    email: "pf@pf.fi"
  };
  const secretKey = 'pooja@1'; // Replace with your secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log('JWT Token:', token);
}

// Call the function to create and sign a JWT
createJWT();
// Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'pooja@1'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5OSwidXNlcm5hbWUiOiJwb29qYUAxIiwiZW1haWwiOiJwZkBwZi5maSIsImlhdCI6MTcxMzg2OTU4N30.hMp0q25aP8QsZNWwSQGeHkcN7ny_FjfoBROGN6XDcNk';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);
// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5OSwidXNlcm5hbWUiOiJwb29qYUAxIiwiZW1haWwiOiJwZkBwZi5maSIsImlhdCI6MTcxMzg2OTg2NX0.VDLhViF7mw2iwJzRtU1nCxOFdCnWbwvxmPLdiS98Zl4';

// Call the function to decode the JWT
decodeJWT(jwtToken);