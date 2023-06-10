export interface ModalState {
  roomMakeModal: boolean;
  waitingModal: boolean;
  majorCardModal: boolean;
  occupationCardModal: boolean;
  myCardModal: boolean;
  equipmentModal: boolean;
  gameStatusModal: boolean;
  resourceExchangeModal: boolean;
  foodSelectionModal: boolean;
  finalScoreModal: boolean;
}

export interface ModalAction {
  type: string;
  payload: keyof ModalState;
}

export interface InGameModalControllerProps {
  actionPublish: ActionPublish;
  exchangePublish: ExchangePublish;
}

export interface APModalProps {
  actionPublish: ActionPublish;
}

export interface Participant {
  id: number;
  username: string;
}

export interface UpdateUserInfo {
  participants: Participant[];
  players: Player[];
}

export interface PlayerAnimal {
  SHEEP: number;
  WILD_BOAR: number;
  CATTLE: number;
}

export type KeyofAnimal = keyof PlayerAnimal;

export interface UpdateAnimal {
  count: number;
  name: keyof PlayerAnimal;
}

export interface ResidentCount {
  residentCount: number;
}

export interface PlayerReducerState extends UpdateUserInfo {
  myInfo: Participant & PlayerAnimal & ResidentCount;
}

type GameProgress = 'PlayerAction' | 'Harvest' | 'Finish';
export interface GameState {
  round: number;
  gameProgress: GameProgress;
  playerId: number;
}

type RoomType = 'WOOD' | 'CLAY' | 'STONE';

export interface Player {
  userId: number;
  startingToken: boolean;
  resources: PlayerResources;
  playerBoard: PlayerBoard;
  cardHand: number[];
  cardField: number[];
  occupations: number[];
  roundStackResource: ResourceType[][];
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

export interface PlayerBoardTile {
  petRoom: PetRoom;
  fieldType: FieldType;
  residents?: Resident[];
  animal?: Animal;
  residentNumber: number;
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
type ResidentType = 'ADULT | "CHILD';
interface Resident {
  residentType: ResidentType;
  played: boolean;
}

export type AnimalType = 'SHEEP' | 'WILD_BOAR' | 'CATTLE';
export interface Animal {
  name: string | null;
  count: number;
}

type PetRoom = null | {
  animal: Animal;
};

type DoType = 'ANDOR' | 'OR' | 'AFTER' | 'FINISH';
type ActionType = 'STACK' | 'CULTIVATION' | 'BUILD' | 'UPGRADE' | 'BAKE' | 'STARTING' | 'PLACE' | 'BASIC' | 'ADOPT' | 'STACK_ANIMAL' | 'BUILD_ROOM' | 'BUILD_FENCE';
export interface ResourceType {
  name: string;
  count: number;
}

export interface BuildAction {
  actionType: string;
  fieldType: string;
  requirements: ResourceType[];
  buildMaxCount: number;
}

export interface BuildActions {
  [key: string]: BuildAction;
}

export interface Action {
  actionType: ActionType;
  buildActions?: BuildActions;
  fieldType?: FieldType;
  resource?: ResourceType;
  stackResource?: ResourceType;
  requirements?: ResourceType[];
}

export interface Event {
  id: number;
  name: string;
  actions: Action[];
  doTypes: DoType[];

  // 이거맞나?
  stacks: [ResourceType] | [];

  round: number;
  playerId: number | null;
}

export type CardType = 'OCCUPATION' | 'MINOR' | 'MAJOR';
export interface CardAttr {
  name: string;
  cardType: CardType;
  cardID: number;
  bonusPoint: number;
  description: string;
  resourcesToFoodAnyTime?: ResourceType[];
}

export interface MajorAttr extends CardAttr {
  bakeEfficiency?: number;
  ingredients: ResourceType[];
}

export interface MinorAttr extends CardAttr {
  preconditionCardType: null | CardType;
  minCardNum: number;
  resourceToFoodHarvest?: ResourceType;
  ingredients: ResourceType[];
  bonusResource?: ResourceType;
  bakeEfficiency?: number;
}

export interface OccupationAttr extends CardAttr {
  resourceToFoodHarvest?: ResourceType;
  playerRequirement: number;
}

export interface PlayerHand {
  cardId: number;
  playerId: number;
}

export interface UnclassifiedCardDictionary {
  cardDict: (MajorAttr & MinorAttr & OccupationAttr)[];
  ownerDict: [];
  playerHand: PlayerHand[];
}

export interface ClassifiedCardDictionary {
  majorDict: MajorAttr[];
  minorDict: MinorAttr[];
  occupationDict: OccupationAttr[];
  ownerDict: PlayerHand[];
  playerHand: PlayerHand[];
}

export interface UpdateCardDict {
  dict: UnclassifiedCardDictionary;
  playerId: number;
}

export interface SelectableCardProps extends UnselectableCardProps {
  roomId: number;
  eventId: number;
  cardId: number;
  // name: string;
  // ingredients: ResourceType[];
  // bonusPoint: number;
  // description: string;
  actionPublish: ActionPublish;
}

export interface UnselectableCardProps {
  name: string;
  ingredients?: ResourceType[];
  bonusPoint: number;
  description: string;
}

export interface Game {
  gameType: string;
  gameState: GameState;
  startingPlayerId: string;
  players: Player[];
  events: Event[];
  cardDictionary: UnclassifiedCardDictionary;
}

export interface GameMessage {
  id: number;
  name: string;
  capacity: number;
  participants: Participant[];
  game: Game;
}

export interface Acts {
  y: number;
  x: number;
  isCol?: boolean;
  resourceType?: ResourceType;
  improvementId: number[];
}

interface CardId {
  cardId: number;
}

interface Act {
  use: boolean;
  acts: null | number | Acts;
}

interface ExchangeResource {
  resource: number;
  count: number;
}

interface ExchangeInfo {
  improvementId: number;
  resource: ExchangeResource;
  count: number;
}

export interface ActionMessageProps {
  eventId: number | undefined;
  acts: Act[];
}

export interface ExchangeMessageProps {
  eventId: number;
  exchange: ExchangeInfo[];
}

export type ActionPublish = (gameRoomId: number, ActionObj: ActionMessageProps) => void;
export type ExchangePublish = (gameRoomId: number, exchangeObj: ExchangeMessageProps) => void;
export type StartGamePublish = (gameRoomId: number) => void;
export type PublishActionFormat = {
  eventId: number;
};

export interface GameScreenProps {
  actionPublish: ActionPublish;
  exchangePublish: ExchangePublish;
  startGamePublish: StartGamePublish;
}

export type FindEventWithId = (events: { events: Event[] }, targetId: number) => Event | undefined;

export type FindEventWithRound = (events: { events: Event[] }, targetRound: number) => Event | undefined;

export interface TileProps {
  roomId: number;
  tileImgSrc: string;
  iconWidth?: string;
  iconHeight?: string;
  actionPublish: ActionPublish;
  event: Event | undefined;
  quantity?: string;
}

export interface CycleTileProps {
  roomId: number;
  actionPublish: ActionPublish;
  event: Event | undefined;
  openRound: number;
}

export interface RoundTileProps extends TileProps {
  openRound: number;
}

export interface ResourceExchange {
  playerId: number;
  exchangePublish: ExchangePublish;
}

export interface HomeProps {
  HomeName: string;
  HomeType: number;
  ID: number;
  handleClick?: () => void; // Add this line
}

export interface HomeBtnProps {
  onClick: () => void; // Add this line
}

export interface FenceBtnRowProps {
  color: string;
  onClick: () => void;
  ID: number;
}

export interface FenceBtnColumnProps {
  color: string;
  onClick: () => void;
  ID: number;
}

export type Point = { row: number; col: number };

export interface CardViewProps {
  cardName: string;
}

export interface Dummy {
  name: string;
  src: string;
  iconWidth: string;
  iconHeight: string;
}
