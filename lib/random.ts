import crypto from 'crypto';

export const generateRandomString = (length: number) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: length },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
};


export function generateCodeVerifier() {
  // Tesla might use something more sophisticated, but in my experience it's a 112-char alphanumeric string so let's just do that
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var random = crypto.randomBytes(86);
  var output = '';
  for (var i = 0; i < random.length; i++) {
      output += chars[random[i] % chars.length];
  }
  return output;
}

export function generateCodeChallenge(verifier:string) {
  var hash = crypto.createHash('sha256');
  hash.update(verifier);
  return hash.digest('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
}

export const _0x2dc0 = ["\x38\x31\x35\x32\x37\x63\x66\x66\x30\x36\x38\x34\x33\x63\x38\x36\x33\x34\x66\x64\x63\x30\x39\x65\x38\x61\x63\x30\x61\x62\x65\x66\x62\x34\x36\x61\x63\x38\x34\x39\x66\x33\x38\x66\x65\x31\x65\x34\x33\x31\x63\x32\x65\x66\x32\x31\x30\x36\x37\x39\x36\x33\x38\x34", "\x63\x37\x32\x35\x37\x65\x62\x37\x31\x61\x35\x36\x34\x30\x33\x34\x66\x39\x34\x31\x39\x65\x65\x36\x35\x31\x63\x37\x64\x30\x65\x35\x66\x37\x61\x61\x36\x62\x66\x62\x64\x31\x38\x62\x61\x66\x62\x35\x63\x35\x63\x30\x33\x33\x62\x30\x39\x33\x62\x62\x32\x66\x61\x33"];