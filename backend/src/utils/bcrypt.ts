const bcrypt = require('bcrypt')

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}