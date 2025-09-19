import type { NextFunction, Request, Response } from 'express';

export function errorHandler(error: unknown, request: Request, response: Response, next: NextFunction) {
  response.sendStatus(500);
}
