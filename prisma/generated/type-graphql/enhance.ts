import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Term: crudResolvers.TermCrudResolver,
  CourseOnTerm: crudResolvers.CourseOnTermCrudResolver,
  School: crudResolvers.SchoolCrudResolver,
  Course: crudResolvers.CourseCrudResolver,
  Professor: crudResolvers.ProfessorCrudResolver,
  Flow: crudResolvers.FlowCrudResolver,
  FlashCardStack: crudResolvers.FlashCardStackCrudResolver,
  FlashCard: crudResolvers.FlashCardCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Term: {
    term: actionResolvers.FindUniqueTermResolver,
    findFirstTerm: actionResolvers.FindFirstTermResolver,
    terms: actionResolvers.FindManyTermResolver,
    createTerm: actionResolvers.CreateTermResolver,
    createManyTerm: actionResolvers.CreateManyTermResolver,
    deleteTerm: actionResolvers.DeleteTermResolver,
    updateTerm: actionResolvers.UpdateTermResolver,
    deleteManyTerm: actionResolvers.DeleteManyTermResolver,
    updateManyTerm: actionResolvers.UpdateManyTermResolver,
    upsertTerm: actionResolvers.UpsertTermResolver,
    aggregateTerm: actionResolvers.AggregateTermResolver,
    groupByTerm: actionResolvers.GroupByTermResolver
  },
  CourseOnTerm: {
    courseOnTerm: actionResolvers.FindUniqueCourseOnTermResolver,
    findFirstCourseOnTerm: actionResolvers.FindFirstCourseOnTermResolver,
    courseOnTerms: actionResolvers.FindManyCourseOnTermResolver,
    createCourseOnTerm: actionResolvers.CreateCourseOnTermResolver,
    createManyCourseOnTerm: actionResolvers.CreateManyCourseOnTermResolver,
    deleteCourseOnTerm: actionResolvers.DeleteCourseOnTermResolver,
    updateCourseOnTerm: actionResolvers.UpdateCourseOnTermResolver,
    deleteManyCourseOnTerm: actionResolvers.DeleteManyCourseOnTermResolver,
    updateManyCourseOnTerm: actionResolvers.UpdateManyCourseOnTermResolver,
    upsertCourseOnTerm: actionResolvers.UpsertCourseOnTermResolver,
    aggregateCourseOnTerm: actionResolvers.AggregateCourseOnTermResolver,
    groupByCourseOnTerm: actionResolvers.GroupByCourseOnTermResolver
  },
  School: {
    school: actionResolvers.FindUniqueSchoolResolver,
    findFirstSchool: actionResolvers.FindFirstSchoolResolver,
    schools: actionResolvers.FindManySchoolResolver,
    createSchool: actionResolvers.CreateSchoolResolver,
    createManySchool: actionResolvers.CreateManySchoolResolver,
    deleteSchool: actionResolvers.DeleteSchoolResolver,
    updateSchool: actionResolvers.UpdateSchoolResolver,
    deleteManySchool: actionResolvers.DeleteManySchoolResolver,
    updateManySchool: actionResolvers.UpdateManySchoolResolver,
    upsertSchool: actionResolvers.UpsertSchoolResolver,
    aggregateSchool: actionResolvers.AggregateSchoolResolver,
    groupBySchool: actionResolvers.GroupBySchoolResolver
  },
  Course: {
    course: actionResolvers.FindUniqueCourseResolver,
    findFirstCourse: actionResolvers.FindFirstCourseResolver,
    courses: actionResolvers.FindManyCourseResolver,
    createCourse: actionResolvers.CreateCourseResolver,
    createManyCourse: actionResolvers.CreateManyCourseResolver,
    deleteCourse: actionResolvers.DeleteCourseResolver,
    updateCourse: actionResolvers.UpdateCourseResolver,
    deleteManyCourse: actionResolvers.DeleteManyCourseResolver,
    updateManyCourse: actionResolvers.UpdateManyCourseResolver,
    upsertCourse: actionResolvers.UpsertCourseResolver,
    aggregateCourse: actionResolvers.AggregateCourseResolver,
    groupByCourse: actionResolvers.GroupByCourseResolver
  },
  Professor: {
    professor: actionResolvers.FindUniqueProfessorResolver,
    findFirstProfessor: actionResolvers.FindFirstProfessorResolver,
    professors: actionResolvers.FindManyProfessorResolver,
    createProfessor: actionResolvers.CreateProfessorResolver,
    createManyProfessor: actionResolvers.CreateManyProfessorResolver,
    deleteProfessor: actionResolvers.DeleteProfessorResolver,
    updateProfessor: actionResolvers.UpdateProfessorResolver,
    deleteManyProfessor: actionResolvers.DeleteManyProfessorResolver,
    updateManyProfessor: actionResolvers.UpdateManyProfessorResolver,
    upsertProfessor: actionResolvers.UpsertProfessorResolver,
    aggregateProfessor: actionResolvers.AggregateProfessorResolver,
    groupByProfessor: actionResolvers.GroupByProfessorResolver
  },
  Flow: {
    flow: actionResolvers.FindUniqueFlowResolver,
    findFirstFlow: actionResolvers.FindFirstFlowResolver,
    flows: actionResolvers.FindManyFlowResolver,
    createFlow: actionResolvers.CreateFlowResolver,
    createManyFlow: actionResolvers.CreateManyFlowResolver,
    deleteFlow: actionResolvers.DeleteFlowResolver,
    updateFlow: actionResolvers.UpdateFlowResolver,
    deleteManyFlow: actionResolvers.DeleteManyFlowResolver,
    updateManyFlow: actionResolvers.UpdateManyFlowResolver,
    upsertFlow: actionResolvers.UpsertFlowResolver,
    aggregateFlow: actionResolvers.AggregateFlowResolver,
    groupByFlow: actionResolvers.GroupByFlowResolver
  },
  FlashCardStack: {
    flashCardStack: actionResolvers.FindUniqueFlashCardStackResolver,
    findFirstFlashCardStack: actionResolvers.FindFirstFlashCardStackResolver,
    flashCardStacks: actionResolvers.FindManyFlashCardStackResolver,
    createFlashCardStack: actionResolvers.CreateFlashCardStackResolver,
    createManyFlashCardStack: actionResolvers.CreateManyFlashCardStackResolver,
    deleteFlashCardStack: actionResolvers.DeleteFlashCardStackResolver,
    updateFlashCardStack: actionResolvers.UpdateFlashCardStackResolver,
    deleteManyFlashCardStack: actionResolvers.DeleteManyFlashCardStackResolver,
    updateManyFlashCardStack: actionResolvers.UpdateManyFlashCardStackResolver,
    upsertFlashCardStack: actionResolvers.UpsertFlashCardStackResolver,
    aggregateFlashCardStack: actionResolvers.AggregateFlashCardStackResolver,
    groupByFlashCardStack: actionResolvers.GroupByFlashCardStackResolver
  },
  FlashCard: {
    flashCard: actionResolvers.FindUniqueFlashCardResolver,
    findFirstFlashCard: actionResolvers.FindFirstFlashCardResolver,
    flashCards: actionResolvers.FindManyFlashCardResolver,
    createFlashCard: actionResolvers.CreateFlashCardResolver,
    createManyFlashCard: actionResolvers.CreateManyFlashCardResolver,
    deleteFlashCard: actionResolvers.DeleteFlashCardResolver,
    updateFlashCard: actionResolvers.UpdateFlashCardResolver,
    deleteManyFlashCard: actionResolvers.DeleteManyFlashCardResolver,
    updateManyFlashCard: actionResolvers.UpdateManyFlashCardResolver,
    upsertFlashCard: actionResolvers.UpsertFlashCardResolver,
    aggregateFlashCard: actionResolvers.AggregateFlashCardResolver,
    groupByFlashCard: actionResolvers.GroupByFlashCardResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Term: ["term", "findFirstTerm", "terms", "createTerm", "createManyTerm", "deleteTerm", "updateTerm", "deleteManyTerm", "updateManyTerm", "upsertTerm", "aggregateTerm", "groupByTerm"],
  CourseOnTerm: ["courseOnTerm", "findFirstCourseOnTerm", "courseOnTerms", "createCourseOnTerm", "createManyCourseOnTerm", "deleteCourseOnTerm", "updateCourseOnTerm", "deleteManyCourseOnTerm", "updateManyCourseOnTerm", "upsertCourseOnTerm", "aggregateCourseOnTerm", "groupByCourseOnTerm"],
  School: ["school", "findFirstSchool", "schools", "createSchool", "createManySchool", "deleteSchool", "updateSchool", "deleteManySchool", "updateManySchool", "upsertSchool", "aggregateSchool", "groupBySchool"],
  Course: ["course", "findFirstCourse", "courses", "createCourse", "createManyCourse", "deleteCourse", "updateCourse", "deleteManyCourse", "updateManyCourse", "upsertCourse", "aggregateCourse", "groupByCourse"],
  Professor: ["professor", "findFirstProfessor", "professors", "createProfessor", "createManyProfessor", "deleteProfessor", "updateProfessor", "deleteManyProfessor", "updateManyProfessor", "upsertProfessor", "aggregateProfessor", "groupByProfessor"],
  Flow: ["flow", "findFirstFlow", "flows", "createFlow", "createManyFlow", "deleteFlow", "updateFlow", "deleteManyFlow", "updateManyFlow", "upsertFlow", "aggregateFlow", "groupByFlow"],
  FlashCardStack: ["flashCardStack", "findFirstFlashCardStack", "flashCardStacks", "createFlashCardStack", "createManyFlashCardStack", "deleteFlashCardStack", "updateFlashCardStack", "deleteManyFlashCardStack", "updateManyFlashCardStack", "upsertFlashCardStack", "aggregateFlashCardStack", "groupByFlashCardStack"],
  FlashCard: ["flashCard", "findFirstFlashCard", "flashCards", "createFlashCard", "createManyFlashCard", "deleteFlashCard", "updateFlashCard", "deleteManyFlashCard", "updateManyFlashCard", "upsertFlashCard", "aggregateFlashCard", "groupByFlashCard"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTermArgs: ["where"],
  FindFirstTermArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTermArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTermArgs: ["data"],
  CreateManyTermArgs: ["data", "skipDuplicates"],
  DeleteTermArgs: ["where"],
  UpdateTermArgs: ["data", "where"],
  DeleteManyTermArgs: ["where"],
  UpdateManyTermArgs: ["data", "where"],
  UpsertTermArgs: ["where", "create", "update"],
  AggregateTermArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTermArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCourseOnTermArgs: ["where"],
  FindFirstCourseOnTermArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCourseOnTermArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCourseOnTermArgs: ["data"],
  CreateManyCourseOnTermArgs: ["data", "skipDuplicates"],
  DeleteCourseOnTermArgs: ["where"],
  UpdateCourseOnTermArgs: ["data", "where"],
  DeleteManyCourseOnTermArgs: ["where"],
  UpdateManyCourseOnTermArgs: ["data", "where"],
  UpsertCourseOnTermArgs: ["where", "create", "update"],
  AggregateCourseOnTermArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCourseOnTermArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSchoolArgs: ["where"],
  FindFirstSchoolArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySchoolArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSchoolArgs: ["data"],
  CreateManySchoolArgs: ["data", "skipDuplicates"],
  DeleteSchoolArgs: ["where"],
  UpdateSchoolArgs: ["data", "where"],
  DeleteManySchoolArgs: ["where"],
  UpdateManySchoolArgs: ["data", "where"],
  UpsertSchoolArgs: ["where", "create", "update"],
  AggregateSchoolArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySchoolArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCourseArgs: ["where"],
  FindFirstCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCourseArgs: ["data"],
  CreateManyCourseArgs: ["data", "skipDuplicates"],
  DeleteCourseArgs: ["where"],
  UpdateCourseArgs: ["data", "where"],
  DeleteManyCourseArgs: ["where"],
  UpdateManyCourseArgs: ["data", "where"],
  UpsertCourseArgs: ["where", "create", "update"],
  AggregateCourseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCourseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProfessorArgs: ["where"],
  FindFirstProfessorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfessorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProfessorArgs: ["data"],
  CreateManyProfessorArgs: ["data", "skipDuplicates"],
  DeleteProfessorArgs: ["where"],
  UpdateProfessorArgs: ["data", "where"],
  DeleteManyProfessorArgs: ["where"],
  UpdateManyProfessorArgs: ["data", "where"],
  UpsertProfessorArgs: ["where", "create", "update"],
  AggregateProfessorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProfessorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFlowArgs: ["where"],
  FindFirstFlowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFlowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFlowArgs: ["data"],
  CreateManyFlowArgs: ["data", "skipDuplicates"],
  DeleteFlowArgs: ["where"],
  UpdateFlowArgs: ["data", "where"],
  DeleteManyFlowArgs: ["where"],
  UpdateManyFlowArgs: ["data", "where"],
  UpsertFlowArgs: ["where", "create", "update"],
  AggregateFlowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFlowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFlashCardStackArgs: ["where"],
  FindFirstFlashCardStackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFlashCardStackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFlashCardStackArgs: ["data"],
  CreateManyFlashCardStackArgs: ["data", "skipDuplicates"],
  DeleteFlashCardStackArgs: ["where"],
  UpdateFlashCardStackArgs: ["data", "where"],
  DeleteManyFlashCardStackArgs: ["where"],
  UpdateManyFlashCardStackArgs: ["data", "where"],
  UpsertFlashCardStackArgs: ["where", "create", "update"],
  AggregateFlashCardStackArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFlashCardStackArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFlashCardArgs: ["where"],
  FindFirstFlashCardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFlashCardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFlashCardArgs: ["data"],
  CreateManyFlashCardArgs: ["data", "skipDuplicates"],
  DeleteFlashCardArgs: ["where"],
  UpdateFlashCardArgs: ["data", "where"],
  DeleteManyFlashCardArgs: ["where"],
  UpdateManyFlashCardArgs: ["data", "where"],
  UpsertFlashCardArgs: ["where", "create", "update"],
  AggregateFlashCardArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFlashCardArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Term: relationResolvers.TermRelationsResolver,
  CourseOnTerm: relationResolvers.CourseOnTermRelationsResolver,
  School: relationResolvers.SchoolRelationsResolver,
  Course: relationResolvers.CourseRelationsResolver,
  Professor: relationResolvers.ProfessorRelationsResolver,
  Flow: relationResolvers.FlowRelationsResolver,
  FlashCardStack: relationResolvers.FlashCardStackRelationsResolver,
  FlashCard: relationResolvers.FlashCardRelationsResolver
};
const relationResolversInfo = {
  User: ["FK_School", "FK_Terms"],
  Term: ["FK_User", "FK_CourseOnTerm"],
  CourseOnTerm: ["FK_Course", "FK_Term", "FK_Flows"],
  School: ["FK_Course", "FK_User"],
  Course: ["FK_School", "FK_Professor", "FK_TermsOnCourse"],
  Professor: ["FK_Courses"],
  Flow: ["FK_FlashCardStacks", "FK_CourseOnTerm"],
  FlashCardStack: ["FK_Flow", "FlashCards"],
  FlashCard: ["FK_FlashCardStack"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  Term: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  CourseOnTerm: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  School: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  Course: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  Professor: ["ProfessorID", "Name", "Email"],
  Flow: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlashCardStack: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCard: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTerm: ["_count", "_avg", "_sum", "_min", "_max"],
  TermGroupBy: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourseOnTerm: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseOnTermGroupBy: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSchool: ["_count", "_avg", "_sum", "_min", "_max"],
  SchoolGroupBy: ["SchoolID", "Name", "HasClassSupport", "TermType", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourse: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseGroupBy: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfessor: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfessorGroupBy: ["ProfessorID", "Name", "Email", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlow: ["_count", "_avg", "_sum", "_min", "_max"],
  FlowGroupBy: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlashCardStack: ["_count", "_avg", "_sum", "_min", "_max"],
  FlashCardStackGroupBy: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlashCard: ["_count", "_avg", "_sum", "_min", "_max"],
  FlashCardGroupBy: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["FK_Terms"],
  UserCountAggregate: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID", "_all"],
  UserAvgAggregate: ["UserID", "FK_SchoolID"],
  UserSumAggregate: ["UserID", "FK_SchoolID"],
  UserMinAggregate: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserMaxAggregate: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  TermCount: ["FK_CourseOnTerm"],
  TermCountAggregate: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID", "_all"],
  TermAvgAggregate: ["TermID", "FK_UserID"],
  TermSumAggregate: ["TermID", "FK_UserID"],
  TermMinAggregate: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  TermMaxAggregate: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  CourseOnTermCount: ["FK_Flows"],
  CourseOnTermCountAggregate: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID", "_all"],
  CourseOnTermAvgAggregate: ["CourseOnTermID", "FK_CourseID", "FK_TermID"],
  CourseOnTermSumAggregate: ["CourseOnTermID", "FK_CourseID", "FK_TermID"],
  CourseOnTermMinAggregate: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  CourseOnTermMaxAggregate: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  SchoolCount: ["FK_Course", "FK_User"],
  SchoolCountAggregate: ["SchoolID", "Name", "HasClassSupport", "TermType", "_all"],
  SchoolAvgAggregate: ["SchoolID"],
  SchoolSumAggregate: ["SchoolID"],
  SchoolMinAggregate: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  SchoolMaxAggregate: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  CourseCount: ["FK_TermsOnCourse"],
  CourseCountAggregate: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title", "_all"],
  CourseAvgAggregate: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  CourseSumAggregate: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  CourseMinAggregate: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  CourseMaxAggregate: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  ProfessorCount: ["FK_Courses"],
  ProfessorCountAggregate: ["ProfessorID", "Name", "Email", "_all"],
  ProfessorAvgAggregate: ["ProfessorID"],
  ProfessorSumAggregate: ["ProfessorID"],
  ProfessorMinAggregate: ["ProfessorID", "Name", "Email"],
  ProfessorMaxAggregate: ["ProfessorID", "Name", "Email"],
  FlowCount: ["FK_FlashCardStacks"],
  FlowCountAggregate: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID", "_all"],
  FlowAvgAggregate: ["FlowID", "FK_CourseOnTermID"],
  FlowSumAggregate: ["FlowID", "FK_CourseOnTermID"],
  FlowMinAggregate: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowMaxAggregate: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlashCardStackCount: ["FlashCards"],
  FlashCardStackCountAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title", "_all"],
  FlashCardStackAvgAggregate: ["FlashCardStackID", "FK_FlowID"],
  FlashCardStackSumAggregate: ["FlashCardStackID", "FK_FlowID"],
  FlashCardStackMinAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackMaxAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardCountAggregate: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_all"],
  FlashCardAvgAggregate: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardSumAggregate: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardMinAggregate: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardMaxAggregate: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_SchoolID", "FK_Terms"],
  UserOrderByWithRelationInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_SchoolID", "FK_Terms"],
  UserWhereUniqueInput: ["UserID", "Email"],
  UserOrderByWithAggregationInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  TermWhereInput: ["AND", "OR", "NOT", "TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_User", "FK_UserID", "FK_CourseOnTerm"],
  TermOrderByWithRelationInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_User", "FK_UserID", "FK_CourseOnTerm"],
  TermWhereUniqueInput: ["TermID"],
  TermOrderByWithAggregationInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID", "_count", "_avg", "_max", "_min", "_sum"],
  TermScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  CourseOnTermWhereInput: ["AND", "OR", "NOT", "CourseOnTermID", "CreatedTime", "FK_Course", "FK_CourseID", "FK_Term", "FK_TermID", "FK_Flows"],
  CourseOnTermOrderByWithRelationInput: ["CourseOnTermID", "CreatedTime", "FK_Course", "FK_CourseID", "FK_Term", "FK_TermID", "FK_Flows"],
  CourseOnTermWhereUniqueInput: ["CourseOnTermID"],
  CourseOnTermOrderByWithAggregationInput: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID", "_count", "_avg", "_max", "_min", "_sum"],
  CourseOnTermScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  SchoolWhereInput: ["AND", "OR", "NOT", "SchoolID", "Name", "HasClassSupport", "TermType", "FK_Course", "FK_User"],
  SchoolOrderByWithRelationInput: ["SchoolID", "Name", "HasClassSupport", "TermType", "FK_Course", "FK_User"],
  SchoolWhereUniqueInput: ["SchoolID"],
  SchoolOrderByWithAggregationInput: ["SchoolID", "Name", "HasClassSupport", "TermType", "_count", "_avg", "_max", "_min", "_sum"],
  SchoolScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "SchoolID", "Name", "HasClassSupport", "TermType"],
  CourseWhereInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "FK_School", "FK_SchoolID", "FK_Professor", "FK_ProfessorID", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  CourseOrderByWithRelationInput: ["CourseID", "CreatedTime", "FK_School", "FK_SchoolID", "FK_Professor", "FK_ProfessorID", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  CourseWhereUniqueInput: ["CourseID"],
  CourseOrderByWithAggregationInput: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title", "_count", "_avg", "_max", "_min", "_sum"],
  CourseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  ProfessorWhereInput: ["AND", "OR", "NOT", "ProfessorID", "FK_Courses", "Name", "Email"],
  ProfessorOrderByWithRelationInput: ["ProfessorID", "FK_Courses", "Name", "Email"],
  ProfessorWhereUniqueInput: ["ProfessorID"],
  ProfessorOrderByWithAggregationInput: ["ProfessorID", "Name", "Email", "_count", "_avg", "_max", "_min", "_sum"],
  ProfessorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ProfessorID", "Name", "Email"],
  FlowWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "FK_FlashCardStacks", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_CourseOnTermID"],
  FlowOrderByWithRelationInput: ["FlowID", "CreatedTime", "FK_FlashCardStacks", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_CourseOnTermID"],
  FlowWhereUniqueInput: ["FlowID"],
  FlowOrderByWithAggregationInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID", "_count", "_avg", "_max", "_min", "_sum"],
  FlowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlashCardStackWhereInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_Flow", "FK_FlowID", "FlashCards", "Title"],
  FlashCardStackOrderByWithRelationInput: ["FlashCardStackID", "CreatedTime", "FK_Flow", "FK_FlowID", "FlashCards", "Title"],
  FlashCardStackWhereUniqueInput: ["FlashCardStackID"],
  FlashCardStackOrderByWithAggregationInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title", "_count", "_avg", "_max", "_min", "_sum"],
  FlashCardStackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardWhereInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStack", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardOrderByWithRelationInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStack", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardWhereUniqueInput: ["FlashCardID"],
  FlashCardOrderByWithAggregationInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_count", "_avg", "_max", "_min", "_sum"],
  FlashCardScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  UserCreateInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Terms"],
  UserUpdateInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Terms"],
  UserCreateManyInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserUpdateManyMutationInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  TermCreateInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_User", "FK_CourseOnTerm"],
  TermUpdateInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_User", "FK_CourseOnTerm"],
  TermCreateManyInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  TermUpdateManyMutationInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate"],
  CourseOnTermCreateInput: ["CreatedTime", "FK_Course", "FK_Term", "FK_Flows"],
  CourseOnTermUpdateInput: ["CreatedTime", "FK_Course", "FK_Term", "FK_Flows"],
  CourseOnTermCreateManyInput: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  CourseOnTermUpdateManyMutationInput: ["CreatedTime"],
  SchoolCreateInput: ["Name", "HasClassSupport", "TermType", "FK_Course", "FK_User"],
  SchoolUpdateInput: ["Name", "HasClassSupport", "TermType", "FK_Course", "FK_User"],
  SchoolCreateManyInput: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  SchoolUpdateManyMutationInput: ["Name", "HasClassSupport", "TermType"],
  CourseCreateInput: ["CreatedTime", "FK_School", "FK_Professor", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  CourseUpdateInput: ["CreatedTime", "FK_School", "FK_Professor", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  CourseCreateManyInput: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  CourseUpdateManyMutationInput: ["CreatedTime", "IsOfficial", "Code", "Title"],
  ProfessorCreateInput: ["FK_Courses", "Name", "Email"],
  ProfessorUpdateInput: ["FK_Courses", "Name", "Email"],
  ProfessorCreateManyInput: ["ProfessorID", "Name", "Email"],
  ProfessorUpdateManyMutationInput: ["Name", "Email"],
  FlowCreateInput: ["CreatedTime", "FK_FlashCardStacks", "Title", "Body", "Visibility", "FK_CourseOnTerm"],
  FlowUpdateInput: ["CreatedTime", "FK_FlashCardStacks", "Title", "Body", "Visibility", "FK_CourseOnTerm"],
  FlowCreateManyInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowUpdateManyMutationInput: ["CreatedTime", "Title", "Body", "Visibility"],
  FlashCardStackCreateInput: ["CreatedTime", "FK_Flow", "FlashCards", "Title"],
  FlashCardStackUpdateInput: ["CreatedTime", "FK_Flow", "FlashCards", "Title"],
  FlashCardStackCreateManyInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackUpdateManyMutationInput: ["CreatedTime", "Title"],
  FlashCardCreateInput: ["CreatedTime", "FK_FlashCardStack", "Position", "Front", "Back"],
  FlashCardUpdateInput: ["CreatedTime", "FK_FlashCardStack", "Position", "Front", "Back"],
  FlashCardCreateManyInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardUpdateManyMutationInput: ["CreatedTime", "Position", "Front", "Back"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  SchoolRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TermListRelationFilter: ["every", "some", "none"],
  TermOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserAvgOrderByAggregateInput: ["UserID", "FK_SchoolID"],
  UserMaxOrderByAggregateInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserMinOrderByAggregateInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserSumOrderByAggregateInput: ["UserID", "FK_SchoolID"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumTermTypeFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  CourseOnTermListRelationFilter: ["every", "some", "none"],
  CourseOnTermOrderByRelationAggregateInput: ["_count"],
  TermCountOrderByAggregateInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  TermAvgOrderByAggregateInput: ["TermID", "FK_UserID"],
  TermMaxOrderByAggregateInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  TermMinOrderByAggregateInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  TermSumOrderByAggregateInput: ["TermID", "FK_UserID"],
  EnumTermTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  CourseRelationFilter: ["is", "isNot"],
  TermRelationFilter: ["is", "isNot"],
  FlowListRelationFilter: ["every", "some", "none"],
  FlowOrderByRelationAggregateInput: ["_count"],
  CourseOnTermCountOrderByAggregateInput: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  CourseOnTermAvgOrderByAggregateInput: ["CourseOnTermID", "FK_CourseID", "FK_TermID"],
  CourseOnTermMaxOrderByAggregateInput: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  CourseOnTermMinOrderByAggregateInput: ["CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  CourseOnTermSumOrderByAggregateInput: ["CourseOnTermID", "FK_CourseID", "FK_TermID"],
  EnumTermTypeNullableFilter: ["equals", "in", "notIn", "not"],
  CourseListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  CourseOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  SchoolCountOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  SchoolAvgOrderByAggregateInput: ["SchoolID"],
  SchoolMaxOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  SchoolMinOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport", "TermType"],
  SchoolSumOrderByAggregateInput: ["SchoolID"],
  EnumTermTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProfessorRelationFilter: ["is", "isNot"],
  CourseCountOrderByAggregateInput: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  CourseAvgOrderByAggregateInput: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  CourseMaxOrderByAggregateInput: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  CourseMinOrderByAggregateInput: ["CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  CourseSumOrderByAggregateInput: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  ProfessorCountOrderByAggregateInput: ["ProfessorID", "Name", "Email"],
  ProfessorAvgOrderByAggregateInput: ["ProfessorID"],
  ProfessorMaxOrderByAggregateInput: ["ProfessorID", "Name", "Email"],
  ProfessorMinOrderByAggregateInput: ["ProfessorID", "Name", "Email"],
  ProfessorSumOrderByAggregateInput: ["ProfessorID"],
  FlashCardStackListRelationFilter: ["every", "some", "none"],
  CourseOnTermRelationFilter: ["is", "isNot"],
  FlashCardStackOrderByRelationAggregateInput: ["_count"],
  FlowCountOrderByAggregateInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowAvgOrderByAggregateInput: ["FlowID", "FK_CourseOnTermID"],
  FlowMaxOrderByAggregateInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowMinOrderByAggregateInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowSumOrderByAggregateInput: ["FlowID", "FK_CourseOnTermID"],
  FlowRelationFilter: ["is", "isNot"],
  FlashCardListRelationFilter: ["every", "some", "none"],
  FlashCardOrderByRelationAggregateInput: ["_count"],
  FlashCardStackCountOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackAvgOrderByAggregateInput: ["FlashCardStackID", "FK_FlowID"],
  FlashCardStackMaxOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackMinOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackSumOrderByAggregateInput: ["FlashCardStackID", "FK_FlowID"],
  FlashCardStackRelationFilter: ["is", "isNot"],
  FlashCardCountOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardAvgOrderByAggregateInput: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardMaxOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardMinOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardSumOrderByAggregateInput: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  SchoolCreateNestedOneWithoutFK_UserInput: ["create", "connectOrCreate", "connect"],
  TermCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumVisibilityFieldUpdateOperationsInput: ["set"],
  SchoolUpdateOneWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TermUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutFK_TermsInput: ["create", "connectOrCreate", "connect"],
  CourseOnTermCreateNestedManyWithoutFK_TermInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumTermTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutFK_TermsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseOnTermUpdateManyWithoutFK_TermInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedOneWithoutFK_TermsOnCourseInput: ["create", "connectOrCreate", "connect"],
  TermCreateNestedOneWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "connect"],
  FlowCreateNestedManyWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TermUpdateOneRequiredWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FlowUpdateManyWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableEnumTermTypeFieldUpdateOperationsInput: ["set"],
  CourseUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchoolCreateNestedOneWithoutFK_CourseInput: ["create", "connectOrCreate", "connect"],
  ProfessorCreateNestedOneWithoutFK_CoursesInput: ["create", "connectOrCreate", "connect"],
  CourseOnTermCreateNestedManyWithoutFK_CourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  SchoolUpdateOneWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProfessorUpdateOneWithoutFK_CoursesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseOnTermUpdateManyWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedManyWithoutFK_ProfessorInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseUpdateManyWithoutFK_ProfessorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlashCardStackCreateNestedManyWithoutFK_FlowInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseOnTermCreateNestedOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "connect"],
  FlashCardStackUpdateManyWithoutFK_FlowInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseOnTermUpdateOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlowCreateNestedOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "connect"],
  FlashCardCreateNestedManyWithoutFK_FlashCardStackInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlowUpdateOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlashCardUpdateManyWithoutFK_FlashCardStackInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlashCardStackCreateNestedOneWithoutFlashCardsInput: ["create", "connectOrCreate", "connect"],
  FlashCardStackUpdateOneWithoutFlashCardsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumTermTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTermTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTermTypeNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTermTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  SchoolCreateWithoutFK_UserInput: ["Name", "HasClassSupport", "TermType", "FK_Course"],
  SchoolCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  TermCreateWithoutFK_UserInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_CourseOnTerm"],
  TermCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  TermCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  SchoolUpsertWithoutFK_UserInput: ["update", "create"],
  SchoolUpdateWithoutFK_UserInput: ["Name", "HasClassSupport", "TermType", "FK_Course"],
  TermUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  TermUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  TermUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  TermScalarWhereInput: ["AND", "OR", "NOT", "TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_UserID"],
  UserCreateWithoutFK_TermsInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School"],
  UserCreateOrConnectWithoutFK_TermsInput: ["where", "create"],
  CourseOnTermCreateWithoutFK_TermInput: ["CreatedTime", "FK_Course", "FK_Flows"],
  CourseOnTermCreateOrConnectWithoutFK_TermInput: ["where", "create"],
  CourseOnTermCreateManyFK_TermInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutFK_TermsInput: ["update", "create"],
  UserUpdateWithoutFK_TermsInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School"],
  CourseOnTermUpsertWithWhereUniqueWithoutFK_TermInput: ["where", "update", "create"],
  CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput: ["where", "data"],
  CourseOnTermUpdateManyWithWhereWithoutFK_TermInput: ["where", "data"],
  CourseOnTermScalarWhereInput: ["AND", "OR", "NOT", "CourseOnTermID", "CreatedTime", "FK_CourseID", "FK_TermID"],
  CourseCreateWithoutFK_TermsOnCourseInput: ["CreatedTime", "FK_School", "FK_Professor", "IsOfficial", "Code", "Title"],
  CourseCreateOrConnectWithoutFK_TermsOnCourseInput: ["where", "create"],
  TermCreateWithoutFK_CourseOnTermInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_User"],
  TermCreateOrConnectWithoutFK_CourseOnTermInput: ["where", "create"],
  FlowCreateWithoutFK_CourseOnTermInput: ["CreatedTime", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowCreateOrConnectWithoutFK_CourseOnTermInput: ["where", "create"],
  FlowCreateManyFK_CourseOnTermInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithoutFK_TermsOnCourseInput: ["update", "create"],
  CourseUpdateWithoutFK_TermsOnCourseInput: ["CreatedTime", "FK_School", "FK_Professor", "IsOfficial", "Code", "Title"],
  TermUpsertWithoutFK_CourseOnTermInput: ["update", "create"],
  TermUpdateWithoutFK_CourseOnTermInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_User"],
  FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput: ["where", "update", "create"],
  FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput: ["where", "data"],
  FlowUpdateManyWithWhereWithoutFK_CourseOnTermInput: ["where", "data"],
  FlowScalarWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  CourseCreateWithoutFK_SchoolInput: ["CreatedTime", "FK_Professor", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  CourseCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  CourseCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFK_SchoolInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Terms"],
  UserCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  UserCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  CourseScalarWhereInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "FK_SchoolID", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  UserUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  SchoolCreateWithoutFK_CourseInput: ["Name", "HasClassSupport", "TermType", "FK_User"],
  SchoolCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  ProfessorCreateWithoutFK_CoursesInput: ["Name", "Email"],
  ProfessorCreateOrConnectWithoutFK_CoursesInput: ["where", "create"],
  CourseOnTermCreateWithoutFK_CourseInput: ["CreatedTime", "FK_Term", "FK_Flows"],
  CourseOnTermCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  CourseOnTermCreateManyFK_CourseInputEnvelope: ["data", "skipDuplicates"],
  SchoolUpsertWithoutFK_CourseInput: ["update", "create"],
  SchoolUpdateWithoutFK_CourseInput: ["Name", "HasClassSupport", "TermType", "FK_User"],
  ProfessorUpsertWithoutFK_CoursesInput: ["update", "create"],
  ProfessorUpdateWithoutFK_CoursesInput: ["Name", "Email"],
  CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput: ["where", "update", "create"],
  CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput: ["where", "data"],
  CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput: ["where", "data"],
  CourseCreateWithoutFK_ProfessorInput: ["CreatedTime", "FK_School", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  CourseCreateOrConnectWithoutFK_ProfessorInput: ["where", "create"],
  CourseCreateManyFK_ProfessorInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithWhereUniqueWithoutFK_ProfessorInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutFK_ProfessorInput: ["where", "data"],
  FlashCardStackCreateWithoutFK_FlowInput: ["CreatedTime", "FlashCards", "Title"],
  FlashCardStackCreateOrConnectWithoutFK_FlowInput: ["where", "create"],
  FlashCardStackCreateManyFK_FlowInputEnvelope: ["data", "skipDuplicates"],
  CourseOnTermCreateWithoutFK_FlowsInput: ["CreatedTime", "FK_Course", "FK_Term"],
  CourseOnTermCreateOrConnectWithoutFK_FlowsInput: ["where", "create"],
  FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput: ["where", "update", "create"],
  FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput: ["where", "data"],
  FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput: ["where", "data"],
  FlashCardStackScalarWhereInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  CourseOnTermUpsertWithoutFK_FlowsInput: ["update", "create"],
  CourseOnTermUpdateWithoutFK_FlowsInput: ["CreatedTime", "FK_Course", "FK_Term"],
  FlowCreateWithoutFK_FlashCardStacksInput: ["CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTerm"],
  FlowCreateOrConnectWithoutFK_FlashCardStacksInput: ["where", "create"],
  FlashCardCreateWithoutFK_FlashCardStackInput: ["CreatedTime", "Position", "Front", "Back"],
  FlashCardCreateOrConnectWithoutFK_FlashCardStackInput: ["where", "create"],
  FlashCardCreateManyFK_FlashCardStackInputEnvelope: ["data", "skipDuplicates"],
  FlowUpsertWithoutFK_FlashCardStacksInput: ["update", "create"],
  FlowUpdateWithoutFK_FlashCardStacksInput: ["CreatedTime", "Title", "Body", "Visibility", "FK_CourseOnTerm"],
  FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput: ["where", "update", "create"],
  FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput: ["where", "data"],
  FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput: ["where", "data"],
  FlashCardScalarWhereInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardStackCreateWithoutFlashCardsInput: ["CreatedTime", "FK_Flow", "Title"],
  FlashCardStackCreateOrConnectWithoutFlashCardsInput: ["where", "create"],
  FlashCardStackUpsertWithoutFlashCardsInput: ["update", "create"],
  FlashCardStackUpdateWithoutFlashCardsInput: ["CreatedTime", "FK_Flow", "Title"],
  TermCreateManyFK_UserInput: ["TermID", "CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate"],
  TermUpdateWithoutFK_UserInput: ["CreatedTime", "TermType", "TermName", "TermStartDate", "TermEndDate", "FK_CourseOnTerm"],
  CourseOnTermCreateManyFK_TermInput: ["CourseOnTermID", "CreatedTime", "FK_CourseID"],
  CourseOnTermUpdateWithoutFK_TermInput: ["CreatedTime", "FK_Course", "FK_Flows"],
  FlowCreateManyFK_CourseOnTermInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility"],
  FlowUpdateWithoutFK_CourseOnTermInput: ["CreatedTime", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  CourseCreateManyFK_SchoolInput: ["CourseID", "CreatedTime", "FK_ProfessorID", "IsOfficial", "Code", "Title"],
  UserCreateManyFK_SchoolInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  CourseUpdateWithoutFK_SchoolInput: ["CreatedTime", "FK_Professor", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  UserUpdateWithoutFK_SchoolInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Terms"],
  CourseOnTermCreateManyFK_CourseInput: ["CourseOnTermID", "CreatedTime", "FK_TermID"],
  CourseOnTermUpdateWithoutFK_CourseInput: ["CreatedTime", "FK_Term", "FK_Flows"],
  CourseCreateManyFK_ProfessorInput: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title"],
  CourseUpdateWithoutFK_ProfessorInput: ["CreatedTime", "FK_School", "FK_TermsOnCourse", "IsOfficial", "Code", "Title"],
  FlashCardStackCreateManyFK_FlowInput: ["FlashCardStackID", "CreatedTime", "Title"],
  FlashCardStackUpdateWithoutFK_FlowInput: ["CreatedTime", "FlashCards", "Title"],
  FlashCardCreateManyFK_FlashCardStackInput: ["FlashCardID", "CreatedTime", "Position", "Front", "Back"],
  FlashCardUpdateWithoutFK_FlashCardStackInput: ["CreatedTime", "Position", "Front", "Back"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

