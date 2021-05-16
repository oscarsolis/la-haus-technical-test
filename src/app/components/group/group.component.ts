import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RealEstate } from '@models/real-estate.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent {
  @Input()
  realEstate: RealEstate = {
    id: '0',
    name: '',
    realEstatesIds: []
  }
}
