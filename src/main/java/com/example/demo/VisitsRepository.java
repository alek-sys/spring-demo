package com.example.demo;

import org.springframework.data.repository.CrudRepository;

interface VisitsRepository extends CrudRepository<Visit, Long> {
}
