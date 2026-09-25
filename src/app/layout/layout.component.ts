import { Component, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { MachineLineComponent } from '../machine-line/machine-line.component';
import { MachineStore } from '../store/machine.store';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'b-layout',
  imports: [HeaderComponent, NavigationComponent, MachineLineComponent, LoadingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  protected readonly store = inject(MachineStore);
}
