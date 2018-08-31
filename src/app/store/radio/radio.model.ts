export class RadioState {
    _error: false;
    _loading: false;
    _action: null;
    id: string;
    imageUrl: string;
    tags: string[];
    timeline: TimelineState[];
}

export const radioInitialState: RadioState = {
    _error: false,
    _loading: false,
    _action: null,
    id: null,
    tags: null,
    imageUrl: null,
    timeline: null,
}

export class TimelineState {
    startTime: string;
    endTime: string;
    playlistURL: string;
}