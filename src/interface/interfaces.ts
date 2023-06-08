import { type } from 'os';
import { StackResource } from './../components/boardComponent/BoardComponent';
import EquipmentModal from './../components/modalComponent/EquipmentModal';

export interface ModalState {
  roomMakeModal: boolean;
  waitingModal: boolean;
  // roomJoinModal: boolean;
  majorCardModal: boolean;
  // subCardModal: boolean;
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

export interface EquipmentModalProps {
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

export interface PlayerReducerState extends UpdateUserInfo {
  myInfo: Participant;
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

export interface Residents {
  p1: number;
  p2: number;
  p3: number;
  p4: number;
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

export type AnimalType = 'SHEEP' | 'WILE_BOAR' | 'CATTLE';
interface Animal {
  name: string | null;
  count: number;
}

type PetRoom = null | {
  animal: Animal;
};

export interface PlayerBoardTile {
  petRoom: PetRoom;
  fieldType: FieldType;
  residents?: Resident[];
  animal?: Animal;
  residentNumber: number;
}

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

export interface TileProps {
  roomId: number;
  tileImgSrc: string;
  iconWidth?: string;
  iconHeight?: string;
  actionPublish: ActionPublish;
  event: Event | undefined;
  quantity?: string;
}

export interface RoundTileProps {
  roomId: number;
  actionPublish: ActionPublish;
  event: Event | undefined;
  openRound: number;
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

export interface JobProps {
  JobName: string;
  JobType: string;
  numOfJob: number | string;
}

export interface ImgSrcProps {
  '양 시장': string;
  울타리: string;
  '곡식 활용': string;
  '급하지 않은 가족 늘리기': string;
  '서부 채석장': string;
  '집 개조': string;
  '돼지 시장': string;
  '채소 종자': string;
  '소 시장': string;
  '동부 채석장': string;
  밭농사: string;
  '급한 가족 늘리기': string;
  '농장 개조': string;
}
