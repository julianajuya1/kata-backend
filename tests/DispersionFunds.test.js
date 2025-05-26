const request = require("supertest");
const express = require("express");
const app = require("../index");
const db = require("../db/connection");

describe("API Transacciones", () => {
  it("should get all transactions", async () => {
    const res = await request(app).get("/api/dispersion_funds");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should get totals per customer", async () => {
    const res = await request(app).get("/api/dispersion_funds/dispersedClient");
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toHaveProperty("client_name");
    expect(res.body[0]).toHaveProperty("total");
  });

  it("should get a client with a higher amount", async () => {
    const res = await request(app).get("/api/dispersion_funds/maximunAmount");
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe("object");
  });

  

  afterAll(async () => {
    await db.end();
  });
});
