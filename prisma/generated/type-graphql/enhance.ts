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
  CourseOnUser: crudResolvers.CourseOnUserCrudResolver,
  Course: crudResolvers.CourseCrudResolver,
  School: crudResolvers.SchoolCrudResolver,
  Professor: crudResolvers.ProfessorCrudResolver,
  Flow: crudResolvers.FlowCrudResolver,
  FlowTagOnFlow: crudResolvers.FlowTagOnFlowCrudResolver,
  FlowTag: crudResolvers.FlowTagCrudResolver,
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
  CourseOnUser: {
    courseOnUser: actionResolvers.FindUniqueCourseOnUserResolver,
    findFirstCourseOnUser: actionResolvers.FindFirstCourseOnUserResolver,
    courseOnUsers: actionResolvers.FindManyCourseOnUserResolver,
    createCourseOnUser: actionResolvers.CreateCourseOnUserResolver,
    createManyCourseOnUser: actionResolvers.CreateManyCourseOnUserResolver,
    deleteCourseOnUser: actionResolvers.DeleteCourseOnUserResolver,
    updateCourseOnUser: actionResolvers.UpdateCourseOnUserResolver,
    deleteManyCourseOnUser: actionResolvers.DeleteManyCourseOnUserResolver,
    updateManyCourseOnUser: actionResolvers.UpdateManyCourseOnUserResolver,
    upsertCourseOnUser: actionResolvers.UpsertCourseOnUserResolver,
    aggregateCourseOnUser: actionResolvers.AggregateCourseOnUserResolver,
    groupByCourseOnUser: actionResolvers.GroupByCourseOnUserResolver
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
  FlowTagOnFlow: {
    flowTagOnFlow: actionResolvers.FindUniqueFlowTagOnFlowResolver,
    findFirstFlowTagOnFlow: actionResolvers.FindFirstFlowTagOnFlowResolver,
    flowTagOnFlows: actionResolvers.FindManyFlowTagOnFlowResolver,
    createFlowTagOnFlow: actionResolvers.CreateFlowTagOnFlowResolver,
    createManyFlowTagOnFlow: actionResolvers.CreateManyFlowTagOnFlowResolver,
    deleteFlowTagOnFlow: actionResolvers.DeleteFlowTagOnFlowResolver,
    updateFlowTagOnFlow: actionResolvers.UpdateFlowTagOnFlowResolver,
    deleteManyFlowTagOnFlow: actionResolvers.DeleteManyFlowTagOnFlowResolver,
    updateManyFlowTagOnFlow: actionResolvers.UpdateManyFlowTagOnFlowResolver,
    upsertFlowTagOnFlow: actionResolvers.UpsertFlowTagOnFlowResolver,
    aggregateFlowTagOnFlow: actionResolvers.AggregateFlowTagOnFlowResolver,
    groupByFlowTagOnFlow: actionResolvers.GroupByFlowTagOnFlowResolver
  },
  FlowTag: {
    flowTag: actionResolvers.FindUniqueFlowTagResolver,
    findFirstFlowTag: actionResolvers.FindFirstFlowTagResolver,
    flowTags: actionResolvers.FindManyFlowTagResolver,
    createFlowTag: actionResolvers.CreateFlowTagResolver,
    createManyFlowTag: actionResolvers.CreateManyFlowTagResolver,
    deleteFlowTag: actionResolvers.DeleteFlowTagResolver,
    updateFlowTag: actionResolvers.UpdateFlowTagResolver,
    deleteManyFlowTag: actionResolvers.DeleteManyFlowTagResolver,
    updateManyFlowTag: actionResolvers.UpdateManyFlowTagResolver,
    upsertFlowTag: actionResolvers.UpsertFlowTagResolver,
    aggregateFlowTag: actionResolvers.AggregateFlowTagResolver,
    groupByFlowTag: actionResolvers.GroupByFlowTagResolver
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
  CourseOnUser: ["courseOnUser", "findFirstCourseOnUser", "courseOnUsers", "createCourseOnUser", "createManyCourseOnUser", "deleteCourseOnUser", "updateCourseOnUser", "deleteManyCourseOnUser", "updateManyCourseOnUser", "upsertCourseOnUser", "aggregateCourseOnUser", "groupByCourseOnUser"],
  Course: ["course", "findFirstCourse", "courses", "createCourse", "createManyCourse", "deleteCourse", "updateCourse", "deleteManyCourse", "updateManyCourse", "upsertCourse", "aggregateCourse", "groupByCourse"],
  School: ["school", "findFirstSchool", "schools", "createSchool", "createManySchool", "deleteSchool", "updateSchool", "deleteManySchool", "updateManySchool", "upsertSchool", "aggregateSchool", "groupBySchool"],
  Professor: ["professor", "findFirstProfessor", "professors", "createProfessor", "createManyProfessor", "deleteProfessor", "updateProfessor", "deleteManyProfessor", "updateManyProfessor", "upsertProfessor", "aggregateProfessor", "groupByProfessor"],
  Flow: ["flow", "findFirstFlow", "flows", "createFlow", "createManyFlow", "deleteFlow", "updateFlow", "deleteManyFlow", "updateManyFlow", "upsertFlow", "aggregateFlow", "groupByFlow"],
  FlowTagOnFlow: ["flowTagOnFlow", "findFirstFlowTagOnFlow", "flowTagOnFlows", "createFlowTagOnFlow", "createManyFlowTagOnFlow", "deleteFlowTagOnFlow", "updateFlowTagOnFlow", "deleteManyFlowTagOnFlow", "updateManyFlowTagOnFlow", "upsertFlowTagOnFlow", "aggregateFlowTagOnFlow", "groupByFlowTagOnFlow"],
  FlowTag: ["flowTag", "findFirstFlowTag", "flowTags", "createFlowTag", "createManyFlowTag", "deleteFlowTag", "updateFlowTag", "deleteManyFlowTag", "updateManyFlowTag", "upsertFlowTag", "aggregateFlowTag", "groupByFlowTag"],
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
  FindUniqueCourseOnUserArgs: ["where"],
  FindFirstCourseOnUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCourseOnUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCourseOnUserArgs: ["data"],
  CreateManyCourseOnUserArgs: ["data", "skipDuplicates"],
  DeleteCourseOnUserArgs: ["where"],
  UpdateCourseOnUserArgs: ["data", "where"],
  DeleteManyCourseOnUserArgs: ["where"],
  UpdateManyCourseOnUserArgs: ["data", "where"],
  UpsertCourseOnUserArgs: ["where", "create", "update"],
  AggregateCourseOnUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCourseOnUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueFlowTagOnFlowArgs: ["where"],
  FindFirstFlowTagOnFlowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFlowTagOnFlowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFlowTagOnFlowArgs: ["data"],
  CreateManyFlowTagOnFlowArgs: ["data", "skipDuplicates"],
  DeleteFlowTagOnFlowArgs: ["where"],
  UpdateFlowTagOnFlowArgs: ["data", "where"],
  DeleteManyFlowTagOnFlowArgs: ["where"],
  UpdateManyFlowTagOnFlowArgs: ["data", "where"],
  UpsertFlowTagOnFlowArgs: ["where", "create", "update"],
  AggregateFlowTagOnFlowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFlowTagOnFlowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFlowTagArgs: ["where"],
  FindFirstFlowTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFlowTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFlowTagArgs: ["data"],
  CreateManyFlowTagArgs: ["data", "skipDuplicates"],
  DeleteFlowTagArgs: ["where"],
  UpdateFlowTagArgs: ["data", "where"],
  DeleteManyFlowTagArgs: ["where"],
  UpdateManyFlowTagArgs: ["data", "where"],
  UpsertFlowTagArgs: ["where", "create", "update"],
  AggregateFlowTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFlowTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  CourseOnUser: relationResolvers.CourseOnUserRelationsResolver,
  Course: relationResolvers.CourseRelationsResolver,
  School: relationResolvers.SchoolRelationsResolver,
  Professor: relationResolvers.ProfessorRelationsResolver,
  Flow: relationResolvers.FlowRelationsResolver,
  FlowTagOnFlow: relationResolvers.FlowTagOnFlowRelationsResolver,
  FlowTag: relationResolvers.FlowTagRelationsResolver,
  FlashCardStack: relationResolvers.FlashCardStackRelationsResolver,
  FlashCard: relationResolvers.FlashCardRelationsResolver
};
const relationResolversInfo = {
  User: ["FK_Courses", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  CourseOnUser: ["FK_User", "FK_Course"],
  Course: ["FK_School", "FK_Professors", "FK_Users"],
  School: ["FK_Course"],
  Professor: ["FK_Course"],
  Flow: ["FK_User", "FK_Tags", "FK_FlashCardStacks"],
  FlowTagOnFlow: ["FK_Flow", "FK_FlowTag"],
  FlowTag: ["FK_User", "FK_Flows"],
  FlashCardStack: ["FK_Flow", "FK_User", "FlashCards"],
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
  User: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  CourseOnUser: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  Course: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  School: ["SchoolID", "Name", "HasClassSupport"],
  Professor: ["ProfessorID", "FK_CourseID", "Name"],
  Flow: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowTagOnFlow: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTag: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlashCardStack: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
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
  UserGroupBy: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourseOnUser: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseOnUserGroupBy: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourse: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseGroupBy: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSchool: ["_count", "_avg", "_sum", "_min", "_max"],
  SchoolGroupBy: ["SchoolID", "Name", "HasClassSupport", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfessor: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfessorGroupBy: ["ProfessorID", "FK_CourseID", "Name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlow: ["_count", "_avg", "_sum", "_min", "_max"],
  FlowGroupBy: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlowTagOnFlow: ["_count", "_avg", "_sum", "_min", "_max"],
  FlowTagOnFlowGroupBy: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlowTag: ["_count", "_avg", "_sum", "_min", "_max"],
  FlowTagGroupBy: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlashCardStack: ["_count", "_avg", "_sum", "_min", "_max"],
  FlashCardStackGroupBy: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlashCard: ["_count", "_avg", "_sum", "_min", "_max"],
  FlashCardGroupBy: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["FK_Courses", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  UserCountAggregate: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "_all"],
  UserAvgAggregate: ["UserID"],
  UserSumAggregate: ["UserID"],
  UserMinAggregate: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  UserMaxAggregate: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  CourseOnUserCountAggregate: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID", "_all"],
  CourseOnUserAvgAggregate: ["CourseOnUserID", "FK_UserID", "FK_CourseID"],
  CourseOnUserSumAggregate: ["CourseOnUserID", "FK_UserID", "FK_CourseID"],
  CourseOnUserMinAggregate: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseOnUserMaxAggregate: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseCount: ["FK_Professors", "FK_Users"],
  CourseCountAggregate: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term", "_all"],
  CourseAvgAggregate: ["CourseID", "FK_SchoolID"],
  CourseSumAggregate: ["CourseID", "FK_SchoolID"],
  CourseMinAggregate: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  CourseMaxAggregate: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  SchoolCount: ["FK_Course"],
  SchoolCountAggregate: ["SchoolID", "Name", "HasClassSupport", "_all"],
  SchoolAvgAggregate: ["SchoolID"],
  SchoolSumAggregate: ["SchoolID"],
  SchoolMinAggregate: ["SchoolID", "Name", "HasClassSupport"],
  SchoolMaxAggregate: ["SchoolID", "Name", "HasClassSupport"],
  ProfessorCountAggregate: ["ProfessorID", "FK_CourseID", "Name", "_all"],
  ProfessorAvgAggregate: ["ProfessorID", "FK_CourseID"],
  ProfessorSumAggregate: ["ProfessorID", "FK_CourseID"],
  ProfessorMinAggregate: ["ProfessorID", "FK_CourseID", "Name"],
  ProfessorMaxAggregate: ["ProfessorID", "FK_CourseID", "Name"],
  FlowCount: ["FK_Tags", "FK_FlashCardStacks"],
  FlowCountAggregate: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility", "_all"],
  FlowAvgAggregate: ["FlowID", "FK_UserID"],
  FlowSumAggregate: ["FlowID", "FK_UserID"],
  FlowMinAggregate: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowMaxAggregate: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowTagOnFlowCountAggregate: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID", "_all"],
  FlowTagOnFlowAvgAggregate: ["FlowTagOnFlowID", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowSumAggregate: ["FlowTagOnFlowID", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowMinAggregate: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowMaxAggregate: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagCount: ["FK_Flows"],
  FlowTagCountAggregate: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name", "_all"],
  FlowTagAvgAggregate: ["FlowTagID", "FK_UserID"],
  FlowTagSumAggregate: ["FlowTagID", "FK_UserID"],
  FlowTagMinAggregate: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlowTagMaxAggregate: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlashCardStackCount: ["FlashCards"],
  FlashCardStackCountAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title", "_all"],
  FlashCardStackAvgAggregate: ["FlashCardStackID", "FK_FlowID", "FK_UserID"],
  FlashCardStackSumAggregate: ["FlashCardStackID", "FK_FlowID", "FK_UserID"],
  FlashCardStackMinAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
  FlashCardStackMaxAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
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
  UserWhereInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  UserOrderByWithRelationInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  UserWhereUniqueInput: ["UserID", "Email"],
  UserOrderByWithAggregationInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  CourseOnUserWhereInput: ["AND", "OR", "NOT", "CourseOnUserID", "HOLDER", "FK_User", "FK_UserID", "FK_Course", "FK_CourseID"],
  CourseOnUserOrderByWithRelationInput: ["CourseOnUserID", "HOLDER", "FK_User", "FK_UserID", "FK_Course", "FK_CourseID"],
  CourseOnUserWhereUniqueInput: ["CourseOnUserID"],
  CourseOnUserOrderByWithAggregationInput: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID", "_count", "_avg", "_max", "_min", "_sum"],
  CourseOnUserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseWhereInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "FK_School", "FK_SchoolID", "FK_Professors", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  CourseOrderByWithRelationInput: ["CourseID", "CreatedTime", "FK_School", "FK_SchoolID", "FK_Professors", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  CourseWhereUniqueInput: ["CourseID"],
  CourseOrderByWithAggregationInput: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term", "_count", "_avg", "_max", "_min", "_sum"],
  CourseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  SchoolWhereInput: ["AND", "OR", "NOT", "SchoolID", "FK_Course", "Name", "HasClassSupport"],
  SchoolOrderByWithRelationInput: ["SchoolID", "FK_Course", "Name", "HasClassSupport"],
  SchoolWhereUniqueInput: ["SchoolID"],
  SchoolOrderByWithAggregationInput: ["SchoolID", "Name", "HasClassSupport", "_count", "_avg", "_max", "_min", "_sum"],
  SchoolScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "SchoolID", "Name", "HasClassSupport"],
  ProfessorWhereInput: ["AND", "OR", "NOT", "ProfessorID", "FK_Course", "FK_CourseID", "Name"],
  ProfessorOrderByWithRelationInput: ["ProfessorID", "FK_Course", "FK_CourseID", "Name"],
  ProfessorWhereUniqueInput: ["ProfessorID"],
  ProfessorOrderByWithAggregationInput: ["ProfessorID", "FK_CourseID", "Name", "_count", "_avg", "_max", "_min", "_sum"],
  ProfessorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ProfessorID", "FK_CourseID", "Name"],
  FlowWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "FK_User", "FK_UserID", "FK_Tags", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowOrderByWithRelationInput: ["FlowID", "CreatedTime", "FK_User", "FK_UserID", "FK_Tags", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowWhereUniqueInput: ["FlowID"],
  FlowOrderByWithAggregationInput: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility", "_count", "_avg", "_max", "_min", "_sum"],
  FlowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowTagOnFlowWhereInput: ["AND", "OR", "NOT", "FlowTagOnFlowID", "HOLDER", "FK_Flow", "FK_FlowID", "FK_FlowTag", "FK_FlowTagID"],
  FlowTagOnFlowOrderByWithRelationInput: ["FlowTagOnFlowID", "HOLDER", "FK_Flow", "FK_FlowID", "FK_FlowTag", "FK_FlowTagID"],
  FlowTagOnFlowWhereUniqueInput: ["FlowTagOnFlowID"],
  FlowTagOnFlowOrderByWithAggregationInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID", "_count", "_avg", "_max", "_min", "_sum"],
  FlowTagOnFlowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagWhereInput: ["AND", "OR", "NOT", "FlowTagID", "CreatedTime", "FK_User", "FK_UserID", "FK_Flows", "Public", "Name"],
  FlowTagOrderByWithRelationInput: ["FlowTagID", "CreatedTime", "FK_User", "FK_UserID", "FK_Flows", "Public", "Name"],
  FlowTagWhereUniqueInput: ["FlowTagID"],
  FlowTagOrderByWithAggregationInput: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name", "_count", "_avg", "_max", "_min", "_sum"],
  FlowTagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlashCardStackWhereInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_Flow", "FK_FlowID", "FK_User", "FK_UserID", "FlashCards", "Title"],
  FlashCardStackOrderByWithRelationInput: ["FlashCardStackID", "CreatedTime", "FK_Flow", "FK_FlowID", "FK_User", "FK_UserID", "FlashCards", "Title"],
  FlashCardStackWhereUniqueInput: ["FlashCardStackID"],
  FlashCardStackOrderByWithAggregationInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title", "_count", "_avg", "_max", "_min", "_sum"],
  FlashCardStackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
  FlashCardWhereInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStack", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardOrderByWithRelationInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStack", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardWhereUniqueInput: ["FlashCardID"],
  FlashCardOrderByWithAggregationInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_count", "_avg", "_max", "_min", "_sum"],
  FlashCardScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  UserCreateInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  UserUpdateInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  UserCreateManyInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  UserUpdateManyMutationInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  CourseOnUserCreateInput: ["HOLDER", "FK_User", "FK_Course"],
  CourseOnUserUpdateInput: ["HOLDER", "FK_User", "FK_Course"],
  CourseOnUserCreateManyInput: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseOnUserUpdateManyMutationInput: ["HOLDER"],
  CourseCreateInput: ["CreatedTime", "FK_School", "FK_Professors", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  CourseUpdateInput: ["CreatedTime", "FK_School", "FK_Professors", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  CourseCreateManyInput: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  CourseUpdateManyMutationInput: ["CreatedTime", "IsOfficial", "Code", "Title", "Term"],
  SchoolCreateInput: ["FK_Course", "Name", "HasClassSupport"],
  SchoolUpdateInput: ["FK_Course", "Name", "HasClassSupport"],
  SchoolCreateManyInput: ["SchoolID", "Name", "HasClassSupport"],
  SchoolUpdateManyMutationInput: ["Name", "HasClassSupport"],
  ProfessorCreateInput: ["FK_Course", "Name"],
  ProfessorUpdateInput: ["FK_Course", "Name"],
  ProfessorCreateManyInput: ["ProfessorID", "FK_CourseID", "Name"],
  ProfessorUpdateManyMutationInput: ["Name"],
  FlowCreateInput: ["CreatedTime", "FK_User", "FK_Tags", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowUpdateInput: ["CreatedTime", "FK_User", "FK_Tags", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowCreateManyInput: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowUpdateManyMutationInput: ["CreatedTime", "Title", "Body", "Visibility"],
  FlowTagOnFlowCreateInput: ["HOLDER", "FK_Flow", "FK_FlowTag"],
  FlowTagOnFlowUpdateInput: ["HOLDER", "FK_Flow", "FK_FlowTag"],
  FlowTagOnFlowCreateManyInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowUpdateManyMutationInput: ["HOLDER"],
  FlowTagCreateInput: ["CreatedTime", "FK_User", "FK_Flows", "Public", "Name"],
  FlowTagUpdateInput: ["CreatedTime", "FK_User", "FK_Flows", "Public", "Name"],
  FlowTagCreateManyInput: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlowTagUpdateManyMutationInput: ["CreatedTime", "Public", "Name"],
  FlashCardStackCreateInput: ["CreatedTime", "FK_Flow", "FK_User", "FlashCards", "Title"],
  FlashCardStackUpdateInput: ["CreatedTime", "FK_Flow", "FK_User", "FlashCards", "Title"],
  FlashCardStackCreateManyInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
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
  CourseOnUserListRelationFilter: ["every", "some", "none"],
  FlowListRelationFilter: ["every", "some", "none"],
  FlowTagListRelationFilter: ["every", "some", "none"],
  FlashCardStackListRelationFilter: ["every", "some", "none"],
  CourseOnUserOrderByRelationAggregateInput: ["_count"],
  FlowOrderByRelationAggregateInput: ["_count"],
  FlowTagOrderByRelationAggregateInput: ["_count"],
  FlashCardStackOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  UserAvgOrderByAggregateInput: ["UserID"],
  UserMaxOrderByAggregateInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  UserMinOrderByAggregateInput: ["UserID", "CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  UserSumOrderByAggregateInput: ["UserID"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CourseRelationFilter: ["is", "isNot"],
  CourseOnUserCountOrderByAggregateInput: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseOnUserAvgOrderByAggregateInput: ["CourseOnUserID", "FK_UserID", "FK_CourseID"],
  CourseOnUserMaxOrderByAggregateInput: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseOnUserMinOrderByAggregateInput: ["CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  CourseOnUserSumOrderByAggregateInput: ["CourseOnUserID", "FK_UserID", "FK_CourseID"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  SchoolRelationFilter: ["is", "isNot"],
  ProfessorListRelationFilter: ["every", "some", "none"],
  ProfessorOrderByRelationAggregateInput: ["_count"],
  CourseCountOrderByAggregateInput: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  CourseAvgOrderByAggregateInput: ["CourseID", "FK_SchoolID"],
  CourseMaxOrderByAggregateInput: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  CourseMinOrderByAggregateInput: ["CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  CourseSumOrderByAggregateInput: ["CourseID", "FK_SchoolID"],
  CourseListRelationFilter: ["every", "some", "none"],
  CourseOrderByRelationAggregateInput: ["_count"],
  SchoolCountOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport"],
  SchoolAvgOrderByAggregateInput: ["SchoolID"],
  SchoolMaxOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport"],
  SchoolMinOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport"],
  SchoolSumOrderByAggregateInput: ["SchoolID"],
  ProfessorCountOrderByAggregateInput: ["ProfessorID", "FK_CourseID", "Name"],
  ProfessorAvgOrderByAggregateInput: ["ProfessorID", "FK_CourseID"],
  ProfessorMaxOrderByAggregateInput: ["ProfessorID", "FK_CourseID", "Name"],
  ProfessorMinOrderByAggregateInput: ["ProfessorID", "FK_CourseID", "Name"],
  ProfessorSumOrderByAggregateInput: ["ProfessorID", "FK_CourseID"],
  FlowTagOnFlowListRelationFilter: ["every", "some", "none"],
  FlowTagOnFlowOrderByRelationAggregateInput: ["_count"],
  FlowCountOrderByAggregateInput: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowAvgOrderByAggregateInput: ["FlowID", "FK_UserID"],
  FlowMaxOrderByAggregateInput: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowMinOrderByAggregateInput: ["FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowSumOrderByAggregateInput: ["FlowID", "FK_UserID"],
  FlowRelationFilter: ["is", "isNot"],
  FlowTagRelationFilter: ["is", "isNot"],
  FlowTagOnFlowCountOrderByAggregateInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowAvgOrderByAggregateInput: ["FlowTagOnFlowID", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowMaxOrderByAggregateInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowMinOrderByAggregateInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlowTagOnFlowSumOrderByAggregateInput: ["FlowTagOnFlowID", "FK_FlowID", "FK_FlowTagID"],
  FlowTagCountOrderByAggregateInput: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlowTagAvgOrderByAggregateInput: ["FlowTagID", "FK_UserID"],
  FlowTagMaxOrderByAggregateInput: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlowTagMinOrderByAggregateInput: ["FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlowTagSumOrderByAggregateInput: ["FlowTagID", "FK_UserID"],
  FlashCardListRelationFilter: ["every", "some", "none"],
  FlashCardOrderByRelationAggregateInput: ["_count"],
  FlashCardStackCountOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
  FlashCardStackAvgOrderByAggregateInput: ["FlashCardStackID", "FK_FlowID", "FK_UserID"],
  FlashCardStackMaxOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
  FlashCardStackMinOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
  FlashCardStackSumOrderByAggregateInput: ["FlashCardStackID", "FK_FlowID", "FK_UserID"],
  FlashCardStackRelationFilter: ["is", "isNot"],
  FlashCardCountOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardAvgOrderByAggregateInput: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardMaxOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardMinOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardSumOrderByAggregateInput: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  CourseOnUserCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlowCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlowTagCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlashCardStackCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumVisibilityFieldUpdateOperationsInput: ["set"],
  CourseOnUserUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlowUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlowTagUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlashCardStackUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutFK_CoursesInput: ["create", "connectOrCreate", "connect"],
  CourseCreateNestedOneWithoutFK_UsersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutFK_CoursesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseUpdateOneWithoutFK_UsersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SchoolCreateNestedOneWithoutFK_CourseInput: ["create", "connectOrCreate", "connect"],
  ProfessorCreateNestedManyWithoutFK_CourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseOnUserCreateNestedManyWithoutFK_CourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  SchoolUpdateOneWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProfessorUpdateManyWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseOnUserUpdateManyWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedOneWithoutFK_ProfessorsInput: ["create", "connectOrCreate", "connect"],
  CourseUpdateOneWithoutFK_ProfessorsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "connect"],
  FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlashCardStackCreateNestedManyWithoutFK_FlowInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlowTagOnFlowUpdateManyWithoutFK_FlowInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlashCardStackUpdateManyWithoutFK_FlowInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlowCreateNestedOneWithoutFK_TagsInput: ["create", "connectOrCreate", "connect"],
  FlowTagCreateNestedOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "connect"],
  FlowUpdateOneWithoutFK_TagsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlowTagUpdateOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutFK_FlowTagsInput: ["create", "connectOrCreate", "connect"],
  FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutFK_FlowTagsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlowCreateNestedOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "connect"],
  FlashCardCreateNestedManyWithoutFK_FlashCardStackInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlowUpdateOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlashCardUpdateManyWithoutFK_FlashCardStackInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlashCardStackCreateNestedOneWithoutFlashCardsInput: ["create", "connectOrCreate", "connect"],
  FlashCardStackUpdateOneWithoutFlashCardsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CourseOnUserCreateWithoutFK_UserInput: ["HOLDER", "FK_Course"],
  CourseOnUserCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  CourseOnUserCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  FlowCreateWithoutFK_UserInput: ["CreatedTime", "FK_Tags", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  FlowCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  FlowTagCreateWithoutFK_UserInput: ["CreatedTime", "FK_Flows", "Public", "Name"],
  FlowTagCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  FlowTagCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  FlashCardStackCreateWithoutFK_UserInput: ["CreatedTime", "FK_Flow", "FlashCards", "Title"],
  FlashCardStackCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  FlashCardStackCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  CourseOnUserUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  CourseOnUserUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  CourseOnUserUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  CourseOnUserScalarWhereInput: ["AND", "OR", "NOT", "CourseOnUserID", "HOLDER", "FK_UserID", "FK_CourseID"],
  FlowUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  FlowUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  FlowUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  FlowScalarWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "FK_UserID", "Title", "Body", "Visibility"],
  FlowTagUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  FlowTagUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  FlowTagUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  FlowTagScalarWhereInput: ["AND", "OR", "NOT", "FlowTagID", "CreatedTime", "FK_UserID", "Public", "Name"],
  FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  FlashCardStackUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  FlashCardStackScalarWhereInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_FlowID", "FK_UserID", "Title"],
  UserCreateWithoutFK_CoursesInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  UserCreateOrConnectWithoutFK_CoursesInput: ["where", "create"],
  CourseCreateWithoutFK_UsersInput: ["CreatedTime", "FK_School", "FK_Professors", "IsOfficial", "Code", "Title", "Term"],
  CourseCreateOrConnectWithoutFK_UsersInput: ["where", "create"],
  UserUpsertWithoutFK_CoursesInput: ["update", "create"],
  UserUpdateWithoutFK_CoursesInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Flows", "FK_FlowTags", "FK_FlashCardStacks"],
  CourseUpsertWithoutFK_UsersInput: ["update", "create"],
  CourseUpdateWithoutFK_UsersInput: ["CreatedTime", "FK_School", "FK_Professors", "IsOfficial", "Code", "Title", "Term"],
  SchoolCreateWithoutFK_CourseInput: ["Name", "HasClassSupport"],
  SchoolCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  ProfessorCreateWithoutFK_CourseInput: ["Name"],
  ProfessorCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  ProfessorCreateManyFK_CourseInputEnvelope: ["data", "skipDuplicates"],
  CourseOnUserCreateWithoutFK_CourseInput: ["HOLDER", "FK_User"],
  CourseOnUserCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  CourseOnUserCreateManyFK_CourseInputEnvelope: ["data", "skipDuplicates"],
  SchoolUpsertWithoutFK_CourseInput: ["update", "create"],
  SchoolUpdateWithoutFK_CourseInput: ["Name", "HasClassSupport"],
  ProfessorUpsertWithWhereUniqueWithoutFK_CourseInput: ["where", "update", "create"],
  ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput: ["where", "data"],
  ProfessorUpdateManyWithWhereWithoutFK_CourseInput: ["where", "data"],
  ProfessorScalarWhereInput: ["AND", "OR", "NOT", "ProfessorID", "FK_CourseID", "Name"],
  CourseOnUserUpsertWithWhereUniqueWithoutFK_CourseInput: ["where", "update", "create"],
  CourseOnUserUpdateWithWhereUniqueWithoutFK_CourseInput: ["where", "data"],
  CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput: ["where", "data"],
  CourseCreateWithoutFK_SchoolInput: ["CreatedTime", "FK_Professors", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  CourseCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  CourseCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  CourseScalarWhereInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "FK_SchoolID", "IsOfficial", "Code", "Title", "Term"],
  CourseCreateWithoutFK_ProfessorsInput: ["CreatedTime", "FK_School", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  CourseCreateOrConnectWithoutFK_ProfessorsInput: ["where", "create"],
  CourseUpsertWithoutFK_ProfessorsInput: ["update", "create"],
  CourseUpdateWithoutFK_ProfessorsInput: ["CreatedTime", "FK_School", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  UserCreateWithoutFK_FlowsInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_FlowTags", "FK_FlashCardStacks"],
  UserCreateOrConnectWithoutFK_FlowsInput: ["where", "create"],
  FlowTagOnFlowCreateWithoutFK_FlowInput: ["HOLDER", "FK_FlowTag"],
  FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput: ["where", "create"],
  FlowTagOnFlowCreateManyFK_FlowInputEnvelope: ["data", "skipDuplicates"],
  FlashCardStackCreateWithoutFK_FlowInput: ["CreatedTime", "FK_User", "FlashCards", "Title"],
  FlashCardStackCreateOrConnectWithoutFK_FlowInput: ["where", "create"],
  FlashCardStackCreateManyFK_FlowInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutFK_FlowsInput: ["update", "create"],
  UserUpdateWithoutFK_FlowsInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_FlowTags", "FK_FlashCardStacks"],
  FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput: ["where", "update", "create"],
  FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput: ["where", "data"],
  FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowInput: ["where", "data"],
  FlowTagOnFlowScalarWhereInput: ["AND", "OR", "NOT", "FlowTagOnFlowID", "HOLDER", "FK_FlowID", "FK_FlowTagID"],
  FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput: ["where", "update", "create"],
  FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput: ["where", "data"],
  FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput: ["where", "data"],
  FlowCreateWithoutFK_TagsInput: ["CreatedTime", "FK_User", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowCreateOrConnectWithoutFK_TagsInput: ["where", "create"],
  FlowTagCreateWithoutFK_FlowsInput: ["CreatedTime", "FK_User", "Public", "Name"],
  FlowTagCreateOrConnectWithoutFK_FlowsInput: ["where", "create"],
  FlowUpsertWithoutFK_TagsInput: ["update", "create"],
  FlowUpdateWithoutFK_TagsInput: ["CreatedTime", "FK_User", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowTagUpsertWithoutFK_FlowsInput: ["update", "create"],
  FlowTagUpdateWithoutFK_FlowsInput: ["CreatedTime", "FK_User", "Public", "Name"],
  UserCreateWithoutFK_FlowTagsInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlashCardStacks"],
  UserCreateOrConnectWithoutFK_FlowTagsInput: ["where", "create"],
  FlowTagOnFlowCreateWithoutFK_FlowTagInput: ["HOLDER", "FK_Flow"],
  FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput: ["where", "create"],
  FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutFK_FlowTagsInput: ["update", "create"],
  UserUpdateWithoutFK_FlowTagsInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlashCardStacks"],
  FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput: ["where", "update", "create"],
  FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput: ["where", "data"],
  FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput: ["where", "data"],
  FlowCreateWithoutFK_FlashCardStacksInput: ["CreatedTime", "FK_User", "FK_Tags", "Title", "Body", "Visibility"],
  FlowCreateOrConnectWithoutFK_FlashCardStacksInput: ["where", "create"],
  UserCreateWithoutFK_FlashCardStacksInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlowTags"],
  UserCreateOrConnectWithoutFK_FlashCardStacksInput: ["where", "create"],
  FlashCardCreateWithoutFK_FlashCardStackInput: ["CreatedTime", "Position", "Front", "Back"],
  FlashCardCreateOrConnectWithoutFK_FlashCardStackInput: ["where", "create"],
  FlashCardCreateManyFK_FlashCardStackInputEnvelope: ["data", "skipDuplicates"],
  FlowUpsertWithoutFK_FlashCardStacksInput: ["update", "create"],
  FlowUpdateWithoutFK_FlashCardStacksInput: ["CreatedTime", "FK_User", "FK_Tags", "Title", "Body", "Visibility"],
  UserUpsertWithoutFK_FlashCardStacksInput: ["update", "create"],
  UserUpdateWithoutFK_FlashCardStacksInput: ["CreatedTime", "SetupComplete", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Courses", "FK_Flows", "FK_FlowTags"],
  FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput: ["where", "update", "create"],
  FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput: ["where", "data"],
  FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput: ["where", "data"],
  FlashCardScalarWhereInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardStackCreateWithoutFlashCardsInput: ["CreatedTime", "FK_Flow", "FK_User", "Title"],
  FlashCardStackCreateOrConnectWithoutFlashCardsInput: ["where", "create"],
  FlashCardStackUpsertWithoutFlashCardsInput: ["update", "create"],
  FlashCardStackUpdateWithoutFlashCardsInput: ["CreatedTime", "FK_Flow", "FK_User", "Title"],
  CourseOnUserCreateManyFK_UserInput: ["CourseOnUserID", "HOLDER", "FK_CourseID"],
  FlowCreateManyFK_UserInput: ["FlowID", "CreatedTime", "Title", "Body", "Visibility"],
  FlowTagCreateManyFK_UserInput: ["FlowTagID", "CreatedTime", "Public", "Name"],
  FlashCardStackCreateManyFK_UserInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  CourseOnUserUpdateWithoutFK_UserInput: ["HOLDER", "FK_Course"],
  FlowUpdateWithoutFK_UserInput: ["CreatedTime", "FK_Tags", "FK_FlashCardStacks", "Title", "Body", "Visibility"],
  FlowTagUpdateWithoutFK_UserInput: ["CreatedTime", "FK_Flows", "Public", "Name"],
  FlashCardStackUpdateWithoutFK_UserInput: ["CreatedTime", "FK_Flow", "FlashCards", "Title"],
  ProfessorCreateManyFK_CourseInput: ["ProfessorID", "Name"],
  CourseOnUserCreateManyFK_CourseInput: ["CourseOnUserID", "HOLDER", "FK_UserID"],
  ProfessorUpdateWithoutFK_CourseInput: ["Name"],
  CourseOnUserUpdateWithoutFK_CourseInput: ["HOLDER", "FK_User"],
  CourseCreateManyFK_SchoolInput: ["CourseID", "CreatedTime", "IsOfficial", "Code", "Title", "Term"],
  CourseUpdateWithoutFK_SchoolInput: ["CreatedTime", "FK_Professors", "FK_Users", "IsOfficial", "Code", "Title", "Term"],
  FlowTagOnFlowCreateManyFK_FlowInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowTagID"],
  FlashCardStackCreateManyFK_FlowInput: ["FlashCardStackID", "CreatedTime", "FK_UserID", "Title"],
  FlowTagOnFlowUpdateWithoutFK_FlowInput: ["HOLDER", "FK_FlowTag"],
  FlashCardStackUpdateWithoutFK_FlowInput: ["CreatedTime", "FK_User", "FlashCards", "Title"],
  FlowTagOnFlowCreateManyFK_FlowTagInput: ["FlowTagOnFlowID", "HOLDER", "FK_FlowID"],
  FlowTagOnFlowUpdateWithoutFK_FlowTagInput: ["HOLDER", "FK_Flow"],
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

