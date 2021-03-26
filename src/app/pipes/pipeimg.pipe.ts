import { Pipe, PipeTransform } from '@angular/core';
import { groupDetail } from '../interfaces/interfaces';

@Pipe({
  name: 'pipeimg',
})
export class PipeimgPipe implements PipeTransform {
  transform(groupType: string): string {
    let imgFinal = '';
    let groupsWithImg: groupDetail[] = [
      { group: 'Work', img: '../../assets/work.jfif' },
      { group: 'Leisure', img: '../../assets/leisure.jfif' },
      { group: 'Personal', img: '../../assets/personal.png' },
      { group: 'Sports', img: '../../assets/sports.jfif' },
    ];

    if (groupType == 'Work') {
      imgFinal = '../../assets/work.jfif';
    }
    if (groupType == 'Leisure') {
      imgFinal = '../../assets/leisure.jfif';
    }

    if (groupType == 'Personal') {
      imgFinal = '../../assets/personal.png';
    }

    if (groupType == 'Sports') {
      imgFinal = '../../assets/sports.jfif';
    }

    return imgFinal;
  }
}
