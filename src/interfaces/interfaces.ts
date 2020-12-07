export type rootStateType = {
    tracks: tracksStateType;
    actions: actionsStateType;
    artist: artistStateType;
};

export type tracksStateType = {
    topTracks: topTracksType[];
    search: searchTracksType[];
    searchStatus: string;
};

export type actionsStateType = {
    topTracksFailed: string;
    artistInfoFailed: string;
    searchTracksFailed: string;
};

export type artistStateType = {
    artistInfo: getArtistInfoType;
};

type imageType = {
    size: string;
    ['#text']: string;
};

export type getTopTracksType = {
    tracks: {
        track: topTracksType[];
        ['@attr']: {
            page: string;
            perPage: string;
            totalPages: string;
            total: string;
        };
    };
};

export type topTracksType = {
    artist: {
        mbid: string;
        name: string;
        url: string;
    };
    duration: string;
    image: imageType[];
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    streamable: {
        fulltrack: string;
        ['#text']: string;
    };
    url: string;
};

export type getArtistInfoType =
    | {
          artist: {
              bio: {
                  content: string;
                  links: {
                      link: {
                          ['#text']: string;
                          href: string;
                          rel: string;
                      };
                  };
                  published: string;
                  summary: string;
              };
              image: imageType[];
              mbid?: string;
              name: string;
              ontour: string;
              similar: {
                  artist: {
                      name: string;
                      image: imageType[];
                      url: string;
                  }[];
              };
              stats: {
                  listeners: string;
                  playcount: string;
              };
              streamable: string;
              tags: {
                  tag: {
                      name: string;
                      url: string;
                  }[];
              };
              url: string;
          };
      }
    | undefined;

export type searchTracksType = {
    artist: string;
    image: imageType[];
    listeners: string;
    mbid: string;
    name: string;
    streamable: string;
    url: string;
};

export type getSearchTracksType = {
    results: {
        ['@attr']: any;
        ['opensearch:Query']: {
            ['#text']: string;
            role: string;
            startPage: string;
        };
        ['opensearch:itemsPerPage']: string;
        ['opensearch:startIndex']: string;
        ['opensearch:totalResults']: string;
        trackmatches: {
            track: searchTracksType[];
        };
    };
};
