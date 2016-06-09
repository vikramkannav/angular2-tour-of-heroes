import { Component } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent { }

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';