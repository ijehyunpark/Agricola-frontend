export interface Participants {
  id: number;
  //   username;
}

type GameProgress = 'PlayerAction' | 'Harvest' | 'Finish';

export interface Game {
  gameType: string;
  gameState: {
    round: number;
    gameProgress: GameProgress;
    playerId: number;
  };
  startingPlayerId: number;
}

type RoomType = 'WOOD' | 'CLAY' | 'STONE';

export interface Player {
  userId: number;
  startingToken: boolean;
  resources: PlayerResources;
  PlayerBoard: PlayerBoard;
  cardHand: number[];
  cardField: number[];
  occupations: number[];
  roomType: RoomType;
}

export interface PlayerResources {
  EMPTY: number;
  WOOD: number;
  CLAY: number;
  STONE: number;
  REED: number;
  GRAIN: number;
  VEGETABLE: number;
  FOOD: number;
  BEGGING: number;
  CARD: number;
  FAMILY: number;
}

export interface PlayerBoard {
  roomCount: number;
  roomType: RoomType;
  fields: PlayerBoardTile[][];
  colFence: boolean[][];
  rowFence: boolean[][];
  moveAnimalArr: [
    {
      name: 'SHEEP';
      count: number;
    },
    {
      name: 'WILD_BOAR';
      count: number;
    },
    {
      name: 'CATTLE';
      count: number;
    }
  ];
}

type FieldType = 'ROOM' | 'FARM' | 'BARN' | 'STABLE' | 'FENCE';
type ResidenType = 'ADULT | "CHILD';

export interface PlayerBoardTile {
  petRoom: {
    animal: {
      name: string | null;
      count: number;
    };
  };
  fieldType: FieldType;
  residents: [
    {
      residentType: ResidenType;
      played: false;
    }
  ];
  residentNumber: number;
}

type DoType = 'ANDOR' | 'OR' | 'AFTER' | 'FINISH';
type ActionType = 'STACK' | 'CULTIVATION' | 'BUILD' | 'UPGRADE' | 'BAKE' | 'STARTING' | 'PLACE' | 'BASIC' | 'ADOPT' | 'STACK_ANIMAL' | 'BUILD_ROOM' | 'BUILD_FENCE';
type ResourceType = {
  name: string;
  count: number;
};

export interface Event {
  id: number;
  name: string;
  actions: [
    {
      actionType: ActionType;
      fieldType?: FieldType;
      resource?: ResourceType;
      stackResource?: ResourceType;
      requirements?: ResourceType[];
    }
  ];
  doTypes: DoType[];
  stacks: [ResourceType] | [];
  round: number;
  playerId: number | null;
}

type CardType = 'OCCUPATION' | 'MINOR' | 'MAJOR';
type Ingredients = {
  name: string;
  count: number;
};

export interface CardDictionary {
  ownerDict: {};
  cardDictList: [
    {
      cardType: CardType;
      cardId: number;
      bonusPoint: number;
      ingredients: Ingredients[];
      resourcesToFoodAnyTime: Ingredients[];
      bakeEfficiency: number;
    }
  ];
}
