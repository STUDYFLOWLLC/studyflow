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
  Course: crudResolvers.CourseCrudResolver,
  CourseOnTerm: crudResolvers.CourseOnTermCrudResolver,
  School: crudResolvers.SchoolCrudResolver,
  Professor: crudResolvers.ProfessorCrudResolver,
  Flow: crudResolvers.FlowCrudResolver,
  FlashCardStack: crudResolvers.FlashCardStackCrudResolver,
  FlashCard: crudResolvers.FlashCardCrudResolver,
  Task: crudResolvers.TaskCrudResolver,
  TaskLabel: crudResolvers.TaskLabelCrudResolver
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
  },
  Task: {
    task: actionResolvers.FindUniqueTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    createTask: actionResolvers.CreateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    deleteTask: actionResolvers.DeleteTaskResolver,
    updateTask: actionResolvers.UpdateTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    upsertTask: actionResolvers.UpsertTaskResolver,
    aggregateTask: actionResolvers.AggregateTaskResolver,
    groupByTask: actionResolvers.GroupByTaskResolver
  },
  TaskLabel: {
    taskLabel: actionResolvers.FindUniqueTaskLabelResolver,
    findFirstTaskLabel: actionResolvers.FindFirstTaskLabelResolver,
    taskLabels: actionResolvers.FindManyTaskLabelResolver,
    createTaskLabel: actionResolvers.CreateTaskLabelResolver,
    createManyTaskLabel: actionResolvers.CreateManyTaskLabelResolver,
    deleteTaskLabel: actionResolvers.DeleteTaskLabelResolver,
    updateTaskLabel: actionResolvers.UpdateTaskLabelResolver,
    deleteManyTaskLabel: actionResolvers.DeleteManyTaskLabelResolver,
    updateManyTaskLabel: actionResolvers.UpdateManyTaskLabelResolver,
    upsertTaskLabel: actionResolvers.UpsertTaskLabelResolver,
    aggregateTaskLabel: actionResolvers.AggregateTaskLabelResolver,
    groupByTaskLabel: actionResolvers.GroupByTaskLabelResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Term: ["term", "findFirstTerm", "terms", "createTerm", "createManyTerm", "deleteTerm", "updateTerm", "deleteManyTerm", "updateManyTerm", "upsertTerm", "aggregateTerm", "groupByTerm"],
  Course: ["course", "findFirstCourse", "courses", "createCourse", "createManyCourse", "deleteCourse", "updateCourse", "deleteManyCourse", "updateManyCourse", "upsertCourse", "aggregateCourse", "groupByCourse"],
  CourseOnTerm: ["courseOnTerm", "findFirstCourseOnTerm", "courseOnTerms", "createCourseOnTerm", "createManyCourseOnTerm", "deleteCourseOnTerm", "updateCourseOnTerm", "deleteManyCourseOnTerm", "updateManyCourseOnTerm", "upsertCourseOnTerm", "aggregateCourseOnTerm", "groupByCourseOnTerm"],
  School: ["school", "findFirstSchool", "schools", "createSchool", "createManySchool", "deleteSchool", "updateSchool", "deleteManySchool", "updateManySchool", "upsertSchool", "aggregateSchool", "groupBySchool"],
  Professor: ["professor", "findFirstProfessor", "professors", "createProfessor", "createManyProfessor", "deleteProfessor", "updateProfessor", "deleteManyProfessor", "updateManyProfessor", "upsertProfessor", "aggregateProfessor", "groupByProfessor"],
  Flow: ["flow", "findFirstFlow", "flows", "createFlow", "createManyFlow", "deleteFlow", "updateFlow", "deleteManyFlow", "updateManyFlow", "upsertFlow", "aggregateFlow", "groupByFlow"],
  FlashCardStack: ["flashCardStack", "findFirstFlashCardStack", "flashCardStacks", "createFlashCardStack", "createManyFlashCardStack", "deleteFlashCardStack", "updateFlashCardStack", "deleteManyFlashCardStack", "updateManyFlashCardStack", "upsertFlashCardStack", "aggregateFlashCardStack", "groupByFlashCardStack"],
  FlashCard: ["flashCard", "findFirstFlashCard", "flashCards", "createFlashCard", "createManyFlashCard", "deleteFlashCard", "updateFlashCard", "deleteManyFlashCard", "updateManyFlashCard", "upsertFlashCard", "aggregateFlashCard", "groupByFlashCard"],
  Task: ["task", "findFirstTask", "tasks", "createTask", "createManyTask", "deleteTask", "updateTask", "deleteManyTask", "updateManyTask", "upsertTask", "aggregateTask", "groupByTask"],
  TaskLabel: ["taskLabel", "findFirstTaskLabel", "taskLabels", "createTaskLabel", "createManyTaskLabel", "deleteTaskLabel", "updateTaskLabel", "deleteManyTaskLabel", "updateManyTaskLabel", "upsertTaskLabel", "aggregateTaskLabel", "groupByTaskLabel"]
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
  GroupByFlashCardArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTaskArgs: ["data"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  DeleteTaskArgs: ["where"],
  UpdateTaskArgs: ["data", "where"],
  DeleteManyTaskArgs: ["where"],
  UpdateManyTaskArgs: ["data", "where"],
  UpsertTaskArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTaskLabelArgs: ["where"],
  FindFirstTaskLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTaskLabelArgs: ["data"],
  CreateManyTaskLabelArgs: ["data", "skipDuplicates"],
  DeleteTaskLabelArgs: ["where"],
  UpdateTaskLabelArgs: ["data", "where"],
  DeleteManyTaskLabelArgs: ["where"],
  UpdateManyTaskLabelArgs: ["data", "where"],
  UpsertTaskLabelArgs: ["where", "create", "update"],
  AggregateTaskLabelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTaskLabelArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  Course: relationResolvers.CourseRelationsResolver,
  CourseOnTerm: relationResolvers.CourseOnTermRelationsResolver,
  School: relationResolvers.SchoolRelationsResolver,
  Professor: relationResolvers.ProfessorRelationsResolver,
  Flow: relationResolvers.FlowRelationsResolver,
  FlashCardStack: relationResolvers.FlashCardStackRelationsResolver,
  FlashCard: relationResolvers.FlashCardRelationsResolver,
  Task: relationResolvers.TaskRelationsResolver,
  TaskLabel: relationResolvers.TaskLabelRelationsResolver
};
const relationResolversInfo = {
  User: ["FK_School", "FK_Terms", "FK_Task"],
  Term: ["FK_User", "FK_School", "FK_CourseOnTerm"],
  Course: ["FK_School", "FK_Professor", "CourseOnTerm"],
  CourseOnTerm: ["FK_Course", "FK_Term", "FK_Flows", "FK_Tasks"],
  School: ["FK_Course", "FK_User", "FK_Professor", "Term"],
  Professor: ["FK_Courses", "FK_School"],
  Flow: ["FK_CourseOnTerm", "FK_FlashCardStacks", "FK_Tasks"],
  FlashCardStack: ["FK_Flow", "FlashCards"],
  FlashCard: ["FK_FlashCardStack"],
  Task: ["FK_TaskLabel", "FK_User", "FK_Flow", "FK_CourseOnTerm"],
  TaskLabel: ["FK_Task"]
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
  User: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  Term: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  Course: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseOnTerm: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  School: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  Professor: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  Flow: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlashCardStack: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCard: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  Task: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskLabel: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"]
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
  UserGroupBy: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTerm: ["_count", "_avg", "_sum", "_min", "_max"],
  TermGroupBy: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourse: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseGroupBy: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourseOnTerm: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseOnTermGroupBy: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSchool: ["_count", "_avg", "_sum", "_min", "_max"],
  SchoolGroupBy: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfessor: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfessorGroupBy: ["ProfessorID", "FK_SchoolID", "Name", "Email", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlow: ["_count", "_avg", "_sum", "_min", "_max"],
  FlowGroupBy: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlashCardStack: ["_count", "_avg", "_sum", "_min", "_max"],
  FlashCardStackGroupBy: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFlashCard: ["_count", "_avg", "_sum", "_min", "_max"],
  FlashCardGroupBy: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTask: ["_count", "_avg", "_sum", "_min", "_max"],
  TaskGroupBy: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTaskLabel: ["_count", "_avg", "_sum", "_min", "_max"],
  TaskLabelGroupBy: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["FK_Terms", "FK_Task"],
  UserCountAggregate: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID", "_all"],
  UserAvgAggregate: ["UserID", "FK_SchoolID"],
  UserSumAggregate: ["UserID", "FK_SchoolID"],
  UserMinAggregate: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserMaxAggregate: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  TermCount: ["FK_CourseOnTerm"],
  TermCountAggregate: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID", "_all"],
  TermAvgAggregate: ["TermID", "FK_UserID", "FK_SchoolID"],
  TermSumAggregate: ["TermID", "FK_UserID", "FK_SchoolID"],
  TermMinAggregate: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  TermMaxAggregate: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  CourseCount: ["CourseOnTerm"],
  CourseCountAggregate: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID", "_all"],
  CourseAvgAggregate: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  CourseSumAggregate: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  CourseMinAggregate: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseMaxAggregate: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseOnTermCount: ["FK_Flows", "FK_Tasks"],
  CourseOnTermCountAggregate: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID", "_all"],
  CourseOnTermAvgAggregate: ["CourseOnTermID", "Index", "FK_CourseID", "FK_TermID"],
  CourseOnTermSumAggregate: ["CourseOnTermID", "Index", "FK_CourseID", "FK_TermID"],
  CourseOnTermMinAggregate: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  CourseOnTermMaxAggregate: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  SchoolCount: ["FK_Course", "FK_User", "FK_Professor", "Term"],
  SchoolCountAggregate: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType", "_all"],
  SchoolAvgAggregate: ["SchoolID"],
  SchoolSumAggregate: ["SchoolID"],
  SchoolMinAggregate: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  SchoolMaxAggregate: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  ProfessorCount: ["FK_Courses"],
  ProfessorCountAggregate: ["ProfessorID", "FK_SchoolID", "Name", "Email", "_all"],
  ProfessorAvgAggregate: ["ProfessorID", "FK_SchoolID"],
  ProfessorSumAggregate: ["ProfessorID", "FK_SchoolID"],
  ProfessorMinAggregate: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  ProfessorMaxAggregate: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  FlowCount: ["FK_FlashCardStacks", "FK_Tasks"],
  FlowCountAggregate: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID", "_all"],
  FlowAvgAggregate: ["FK_CourseOnTermID"],
  FlowSumAggregate: ["FK_CourseOnTermID"],
  FlowMinAggregate: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowMaxAggregate: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlashCardStackCount: ["FlashCards"],
  FlashCardStackCountAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title", "_all"],
  FlashCardStackAvgAggregate: ["FlashCardStackID"],
  FlashCardStackSumAggregate: ["FlashCardStackID"],
  FlashCardStackMinAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackMaxAggregate: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardCountAggregate: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back", "_all"],
  FlashCardAvgAggregate: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardSumAggregate: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardMinAggregate: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardMaxAggregate: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  TaskCount: ["FK_TaskLabel"],
  TaskCountAggregate: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID", "_all"],
  TaskAvgAggregate: ["FK_UserID", "FK_CourseOnTermID"],
  TaskSumAggregate: ["FK_UserID", "FK_CourseOnTermID"],
  TaskMinAggregate: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskMaxAggregate: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskLabelCountAggregate: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID", "_all"],
  TaskLabelAvgAggregate: ["TaskLabelID"],
  TaskLabelSumAggregate: ["TaskLabelID"],
  TaskLabelMinAggregate: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  TaskLabelMaxAggregate: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"]
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
  UserWhereInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_SchoolID", "FK_Terms", "FK_Task"],
  UserOrderByWithRelationInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_SchoolID", "FK_Terms", "FK_Task"],
  UserWhereUniqueInput: ["UserID", "Email"],
  UserOrderByWithAggregationInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  TermWhereInput: ["AND", "OR", "NOT", "TermID", "CreatedTime", "TermType", "TermName", "FK_User", "FK_UserID", "FK_School", "FK_SchoolID", "FK_CourseOnTerm"],
  TermOrderByWithRelationInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_User", "FK_UserID", "FK_School", "FK_SchoolID", "FK_CourseOnTerm"],
  TermWhereUniqueInput: ["TermID"],
  TermOrderByWithAggregationInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID", "_count", "_avg", "_max", "_min", "_sum"],
  TermScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  CourseWhereInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "FK_SchoolID", "FK_Professor", "FK_ProfessorID", "CourseOnTerm"],
  CourseOrderByWithRelationInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "FK_SchoolID", "FK_Professor", "FK_ProfessorID", "CourseOnTerm"],
  CourseWhereUniqueInput: ["CourseID"],
  CourseOrderByWithAggregationInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID", "_count", "_avg", "_max", "_min", "_sum"],
  CourseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseOnTermWhereInput: ["AND", "OR", "NOT", "CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_CourseID", "FK_Term", "FK_TermID", "FK_Flows", "FK_Tasks"],
  CourseOnTermOrderByWithRelationInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_CourseID", "FK_Term", "FK_TermID", "FK_Flows", "FK_Tasks"],
  CourseOnTermWhereUniqueInput: ["CourseOnTermID"],
  CourseOnTermOrderByWithAggregationInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID", "_count", "_avg", "_max", "_min", "_sum"],
  CourseOnTermScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  SchoolWhereInput: ["AND", "OR", "NOT", "SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "FK_Professor", "Term"],
  SchoolOrderByWithRelationInput: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "FK_Professor", "Term"],
  SchoolWhereUniqueInput: ["SchoolID"],
  SchoolOrderByWithAggregationInput: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType", "_count", "_avg", "_max", "_min", "_sum"],
  SchoolScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  ProfessorWhereInput: ["AND", "OR", "NOT", "ProfessorID", "FK_Courses", "FK_School", "FK_SchoolID", "Name", "Email"],
  ProfessorOrderByWithRelationInput: ["ProfessorID", "FK_Courses", "FK_School", "FK_SchoolID", "Name", "Email"],
  ProfessorWhereUniqueInput: ["ProfessorID"],
  ProfessorOrderByWithAggregationInput: ["ProfessorID", "FK_SchoolID", "Name", "Email", "_count", "_avg", "_max", "_min", "_sum"],
  ProfessorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ProfessorID", "FK_SchoolID", "Name", "Email"],
  FlowWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_CourseOnTermID", "FK_FlashCardStacks", "FK_Tasks"],
  FlowOrderByWithRelationInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_CourseOnTermID", "FK_FlashCardStacks", "FK_Tasks"],
  FlowWhereUniqueInput: ["FlowID"],
  FlowOrderByWithAggregationInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID", "_count", "_avg", "_max", "_min", "_sum"],
  FlowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
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
  TaskWhereInput: ["AND", "OR", "NOT", "TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_UserID", "FK_Flow", "FK_FlowID", "FK_CourseOnTerm", "FK_CourseOnTermID"],
  TaskOrderByWithRelationInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_UserID", "FK_Flow", "FK_FlowID", "FK_CourseOnTerm", "FK_CourseOnTermID"],
  TaskWhereUniqueInput: ["TaskID"],
  TaskOrderByWithAggregationInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID", "_count", "_avg", "_max", "_min", "_sum"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskLabelWhereInput: ["AND", "OR", "NOT", "TaskLabelID", "CreatedTime", "Label", "FK_Task", "FK_TaskID"],
  TaskLabelOrderByWithRelationInput: ["TaskLabelID", "CreatedTime", "Label", "FK_Task", "FK_TaskID"],
  TaskLabelWhereUniqueInput: ["TaskLabelID"],
  TaskLabelOrderByWithAggregationInput: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID", "_count", "_avg", "_max", "_min", "_sum"],
  TaskLabelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  UserCreateInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Terms", "FK_Task"],
  UserUpdateInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Terms", "FK_Task"],
  UserCreateManyInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserUpdateManyMutationInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  TermCreateInput: ["CreatedTime", "TermType", "TermName", "FK_User", "FK_School", "FK_CourseOnTerm"],
  TermUpdateInput: ["CreatedTime", "TermType", "TermName", "FK_User", "FK_School", "FK_CourseOnTerm"],
  TermCreateManyInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  TermUpdateManyMutationInput: ["CreatedTime", "TermType", "TermName"],
  CourseCreateInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "FK_Professor", "CourseOnTerm"],
  CourseUpdateInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "FK_Professor", "CourseOnTerm"],
  CourseCreateManyInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseUpdateManyMutationInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title"],
  CourseOnTermCreateInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Term", "FK_Flows", "FK_Tasks"],
  CourseOnTermUpdateInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Term", "FK_Flows", "FK_Tasks"],
  CourseOnTermCreateManyInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  CourseOnTermUpdateManyMutationInput: ["CreatedTime", "Index", "Color", "Nickname"],
  SchoolCreateInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "FK_Professor", "Term"],
  SchoolUpdateInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "FK_Professor", "Term"],
  SchoolCreateManyInput: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  SchoolUpdateManyMutationInput: ["Name", "HasClassSupport", "SearchIndex", "TermType"],
  ProfessorCreateInput: ["FK_Courses", "FK_School", "Name", "Email"],
  ProfessorUpdateInput: ["FK_Courses", "FK_School", "Name", "Email"],
  ProfessorCreateManyInput: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  ProfessorUpdateManyMutationInput: ["Name", "Email"],
  FlowCreateInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_FlashCardStacks", "FK_Tasks"],
  FlowUpdateInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_FlashCardStacks", "FK_Tasks"],
  FlowCreateManyInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowUpdateManyMutationInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility"],
  FlashCardStackCreateInput: ["CreatedTime", "FK_Flow", "FlashCards", "Title"],
  FlashCardStackUpdateInput: ["CreatedTime", "FK_Flow", "FlashCards", "Title"],
  FlashCardStackCreateManyInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackUpdateManyMutationInput: ["CreatedTime", "Title"],
  FlashCardCreateInput: ["CreatedTime", "FK_FlashCardStack", "Position", "Front", "Back"],
  FlashCardUpdateInput: ["CreatedTime", "FK_FlashCardStack", "Position", "Front", "Back"],
  FlashCardCreateManyInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardUpdateManyMutationInput: ["CreatedTime", "Position", "Front", "Back"],
  TaskCreateInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_Flow", "FK_CourseOnTerm"],
  TaskUpdateInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_Flow", "FK_CourseOnTerm"],
  TaskCreateManyInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskUpdateManyMutationInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type"],
  TaskLabelCreateInput: ["CreatedTime", "Label", "FK_Task"],
  TaskLabelUpdateInput: ["CreatedTime", "Label", "FK_Task"],
  TaskLabelCreateManyInput: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  TaskLabelUpdateManyMutationInput: ["CreatedTime", "Label"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumSetupStepFilter: ["equals", "in", "notIn", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  SchoolRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TermListRelationFilter: ["every", "some", "none"],
  TaskListRelationFilter: ["every", "some", "none"],
  TermOrderByRelationAggregateInput: ["_count"],
  TaskOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserAvgOrderByAggregateInput: ["UserID", "FK_SchoolID"],
  UserMaxOrderByAggregateInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserMinOrderByAggregateInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  UserSumOrderByAggregateInput: ["UserID", "FK_SchoolID"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumSetupStepWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumTermTypeFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  CourseOnTermListRelationFilter: ["every", "some", "none"],
  CourseOnTermOrderByRelationAggregateInput: ["_count"],
  TermCountOrderByAggregateInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  TermAvgOrderByAggregateInput: ["TermID", "FK_UserID", "FK_SchoolID"],
  TermMaxOrderByAggregateInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  TermMinOrderByAggregateInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  TermSumOrderByAggregateInput: ["TermID", "FK_UserID", "FK_SchoolID"],
  EnumTermTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  ProfessorRelationFilter: ["is", "isNot"],
  CourseCountOrderByAggregateInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseAvgOrderByAggregateInput: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  CourseMaxOrderByAggregateInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseMinOrderByAggregateInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  CourseSumOrderByAggregateInput: ["CourseID", "FK_SchoolID", "FK_ProfessorID"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  CourseRelationFilter: ["is", "isNot"],
  TermRelationFilter: ["is", "isNot"],
  FlowListRelationFilter: ["every", "some", "none"],
  FlowOrderByRelationAggregateInput: ["_count"],
  CourseOnTermCountOrderByAggregateInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  CourseOnTermAvgOrderByAggregateInput: ["CourseOnTermID", "Index", "FK_CourseID", "FK_TermID"],
  CourseOnTermMaxOrderByAggregateInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  CourseOnTermMinOrderByAggregateInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  CourseOnTermSumOrderByAggregateInput: ["CourseOnTermID", "Index", "FK_CourseID", "FK_TermID"],
  EnumTermTypeNullableFilter: ["equals", "in", "notIn", "not"],
  CourseListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  ProfessorListRelationFilter: ["every", "some", "none"],
  CourseOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  ProfessorOrderByRelationAggregateInput: ["_count"],
  SchoolCountOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  SchoolAvgOrderByAggregateInput: ["SchoolID"],
  SchoolMaxOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  SchoolMinOrderByAggregateInput: ["SchoolID", "Name", "HasClassSupport", "SearchIndex", "TermType"],
  SchoolSumOrderByAggregateInput: ["SchoolID"],
  EnumTermTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProfessorCountOrderByAggregateInput: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  ProfessorAvgOrderByAggregateInput: ["ProfessorID", "FK_SchoolID"],
  ProfessorMaxOrderByAggregateInput: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  ProfessorMinOrderByAggregateInput: ["ProfessorID", "FK_SchoolID", "Name", "Email"],
  ProfessorSumOrderByAggregateInput: ["ProfessorID", "FK_SchoolID"],
  EnumFlowTypeFilter: ["equals", "in", "notIn", "not"],
  EnumVisibilityFilter: ["equals", "in", "notIn", "not"],
  CourseOnTermRelationFilter: ["is", "isNot"],
  FlashCardStackListRelationFilter: ["every", "some", "none"],
  FlashCardStackOrderByRelationAggregateInput: ["_count"],
  FlowCountOrderByAggregateInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowAvgOrderByAggregateInput: ["FK_CourseOnTermID"],
  FlowMaxOrderByAggregateInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowMinOrderByAggregateInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  FlowSumOrderByAggregateInput: ["FK_CourseOnTermID"],
  EnumFlowTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumVisibilityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FlowRelationFilter: ["is", "isNot"],
  FlashCardListRelationFilter: ["every", "some", "none"],
  FlashCardOrderByRelationAggregateInput: ["_count"],
  FlashCardStackCountOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackAvgOrderByAggregateInput: ["FlashCardStackID"],
  FlashCardStackMaxOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackMinOrderByAggregateInput: ["FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  FlashCardStackSumOrderByAggregateInput: ["FlashCardStackID"],
  FlashCardStackRelationFilter: ["is", "isNot"],
  FlashCardCountOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardAvgOrderByAggregateInput: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  FlashCardMaxOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardMinOrderByAggregateInput: ["FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardSumOrderByAggregateInput: ["FlashCardID", "FK_FlashCardStackID", "Position"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumTaskTypeNullableFilter: ["equals", "in", "notIn", "not"],
  TaskLabelListRelationFilter: ["every", "some", "none"],
  TaskLabelOrderByRelationAggregateInput: ["_count"],
  TaskCountOrderByAggregateInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskAvgOrderByAggregateInput: ["FK_UserID", "FK_CourseOnTermID"],
  TaskMaxOrderByAggregateInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskMinOrderByAggregateInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  TaskSumOrderByAggregateInput: ["FK_UserID", "FK_CourseOnTermID"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumTaskTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TaskRelationFilter: ["is", "isNot"],
  TaskLabelCountOrderByAggregateInput: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  TaskLabelAvgOrderByAggregateInput: ["TaskLabelID"],
  TaskLabelMaxOrderByAggregateInput: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  TaskLabelMinOrderByAggregateInput: ["TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  TaskLabelSumOrderByAggregateInput: ["TaskLabelID"],
  SchoolCreateNestedOneWithoutFK_UserInput: ["create", "connectOrCreate", "connect"],
  TermCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TaskCreateNestedManyWithoutFK_UserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumSetupStepFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumVisibilityFieldUpdateOperationsInput: ["set"],
  SchoolUpdateOneWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TermUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutFK_UserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutFK_TermsInput: ["create", "connectOrCreate", "connect"],
  SchoolCreateNestedOneWithoutTermInput: ["create", "connectOrCreate", "connect"],
  CourseOnTermCreateNestedManyWithoutFK_TermInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumTermTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutFK_TermsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SchoolUpdateOneWithoutTermInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseOnTermUpdateManyWithoutFK_TermInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchoolCreateNestedOneWithoutFK_CourseInput: ["create", "connectOrCreate", "connect"],
  ProfessorCreateNestedOneWithoutFK_CoursesInput: ["create", "connectOrCreate", "connect"],
  CourseOnTermCreateNestedManyWithoutFK_CourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  SchoolUpdateOneWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProfessorUpdateOneWithoutFK_CoursesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseOnTermUpdateManyWithoutFK_CourseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedOneWithoutCourseOnTermInput: ["create", "connectOrCreate", "connect"],
  TermCreateNestedOneWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "connect"],
  FlowCreateNestedManyWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "createMany", "connect"],
  TaskCreateNestedManyWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "createMany", "connect"],
  CourseUpdateOneWithoutCourseOnTermInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TermUpdateOneWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlowUpdateManyWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutFK_CourseOnTermInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProfessorCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  TermCreateNestedManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableEnumTermTypeFieldUpdateOperationsInput: ["set"],
  CourseUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProfessorUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TermUpdateManyWithoutFK_SchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedManyWithoutFK_ProfessorInput: ["create", "connectOrCreate", "createMany", "connect"],
  SchoolCreateNestedOneWithoutFK_ProfessorInput: ["create", "connectOrCreate", "connect"],
  CourseUpdateManyWithoutFK_ProfessorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchoolUpdateOneWithoutFK_ProfessorInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseOnTermCreateNestedOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "connect"],
  FlashCardStackCreateNestedManyWithoutFK_FlowInput: ["create", "connectOrCreate", "createMany", "connect"],
  TaskCreateNestedManyWithoutFK_FlowInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumFlowTypeFieldUpdateOperationsInput: ["set"],
  EnumVisibilityFieldUpdateOperationsInput: ["set"],
  CourseOnTermUpdateOneWithoutFK_FlowsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlashCardStackUpdateManyWithoutFK_FlowInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutFK_FlowInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlowCreateNestedOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "connect"],
  FlashCardCreateNestedManyWithoutFK_FlashCardStackInput: ["create", "connectOrCreate", "createMany", "connect"],
  FlowUpdateOneWithoutFK_FlashCardStacksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlashCardUpdateManyWithoutFK_FlashCardStackInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FlashCardStackCreateNestedOneWithoutFlashCardsInput: ["create", "connectOrCreate", "connect"],
  FlashCardStackUpdateOneWithoutFlashCardsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskLabelCreateNestedManyWithoutFK_TaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutFK_TaskInput: ["create", "connectOrCreate", "connect"],
  FlowCreateNestedOneWithoutFK_TasksInput: ["create", "connectOrCreate", "connect"],
  CourseOnTermCreateNestedOneWithoutFK_TasksInput: ["create", "connectOrCreate", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableEnumTaskTypeFieldUpdateOperationsInput: ["set"],
  TaskLabelUpdateManyWithoutFK_TaskInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneWithoutFK_TaskInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FlowUpdateOneWithoutFK_TasksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CourseOnTermUpdateOneWithoutFK_TasksInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskCreateNestedOneWithoutFK_TaskLabelInput: ["create", "connectOrCreate", "connect"],
  TaskUpdateOneWithoutFK_TaskLabelInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumSetupStepFilter: ["equals", "in", "notIn", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumVisibilityNullableFilter: ["equals", "in", "notIn", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumSetupStepWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumVisibilityNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumTermTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTermTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumTermTypeNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTermTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumFlowTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumVisibilityFilter: ["equals", "in", "notIn", "not"],
  NestedEnumFlowTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumVisibilityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumTaskTypeNullableFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumTaskTypeNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  SchoolCreateWithoutFK_UserInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_Professor", "Term"],
  SchoolCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  TermCreateWithoutFK_UserInput: ["CreatedTime", "TermType", "TermName", "FK_School", "FK_CourseOnTerm"],
  TermCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  TermCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  TaskCreateWithoutFK_UserInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_Flow", "FK_CourseOnTerm"],
  TaskCreateOrConnectWithoutFK_UserInput: ["where", "create"],
  TaskCreateManyFK_UserInputEnvelope: ["data", "skipDuplicates"],
  SchoolUpsertWithoutFK_UserInput: ["update", "create"],
  SchoolUpdateWithoutFK_UserInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_Professor", "Term"],
  TermUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  TermUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  TermUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  TermScalarWhereInput: ["AND", "OR", "NOT", "TermID", "CreatedTime", "TermType", "TermName", "FK_UserID", "FK_SchoolID"],
  TaskUpsertWithWhereUniqueWithoutFK_UserInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutFK_UserInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutFK_UserInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID", "FK_CourseOnTermID"],
  UserCreateWithoutFK_TermsInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Task"],
  UserCreateOrConnectWithoutFK_TermsInput: ["where", "create"],
  SchoolCreateWithoutTermInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "FK_Professor"],
  SchoolCreateOrConnectWithoutTermInput: ["where", "create"],
  CourseOnTermCreateWithoutFK_TermInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Flows", "FK_Tasks"],
  CourseOnTermCreateOrConnectWithoutFK_TermInput: ["where", "create"],
  CourseOnTermCreateManyFK_TermInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutFK_TermsInput: ["update", "create"],
  UserUpdateWithoutFK_TermsInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Task"],
  SchoolUpsertWithoutTermInput: ["update", "create"],
  SchoolUpdateWithoutTermInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "FK_Professor"],
  CourseOnTermUpsertWithWhereUniqueWithoutFK_TermInput: ["where", "update", "create"],
  CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput: ["where", "data"],
  CourseOnTermUpdateManyWithWhereWithoutFK_TermInput: ["where", "data"],
  CourseOnTermScalarWhereInput: ["AND", "OR", "NOT", "CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID", "FK_TermID"],
  SchoolCreateWithoutFK_CourseInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_User", "FK_Professor", "Term"],
  SchoolCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  ProfessorCreateWithoutFK_CoursesInput: ["FK_School", "Name", "Email"],
  ProfessorCreateOrConnectWithoutFK_CoursesInput: ["where", "create"],
  CourseOnTermCreateWithoutFK_CourseInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Term", "FK_Flows", "FK_Tasks"],
  CourseOnTermCreateOrConnectWithoutFK_CourseInput: ["where", "create"],
  CourseOnTermCreateManyFK_CourseInputEnvelope: ["data", "skipDuplicates"],
  SchoolUpsertWithoutFK_CourseInput: ["update", "create"],
  SchoolUpdateWithoutFK_CourseInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_User", "FK_Professor", "Term"],
  ProfessorUpsertWithoutFK_CoursesInput: ["update", "create"],
  ProfessorUpdateWithoutFK_CoursesInput: ["FK_School", "Name", "Email"],
  CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput: ["where", "update", "create"],
  CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput: ["where", "data"],
  CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput: ["where", "data"],
  CourseCreateWithoutCourseOnTermInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "FK_Professor"],
  CourseCreateOrConnectWithoutCourseOnTermInput: ["where", "create"],
  TermCreateWithoutFK_CourseOnTermInput: ["CreatedTime", "TermType", "TermName", "FK_User", "FK_School"],
  TermCreateOrConnectWithoutFK_CourseOnTermInput: ["where", "create"],
  FlowCreateWithoutFK_CourseOnTermInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_FlashCardStacks", "FK_Tasks"],
  FlowCreateOrConnectWithoutFK_CourseOnTermInput: ["where", "create"],
  FlowCreateManyFK_CourseOnTermInputEnvelope: ["data", "skipDuplicates"],
  TaskCreateWithoutFK_CourseOnTermInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_Flow"],
  TaskCreateOrConnectWithoutFK_CourseOnTermInput: ["where", "create"],
  TaskCreateManyFK_CourseOnTermInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithoutCourseOnTermInput: ["update", "create"],
  CourseUpdateWithoutCourseOnTermInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "FK_Professor"],
  TermUpsertWithoutFK_CourseOnTermInput: ["update", "create"],
  TermUpdateWithoutFK_CourseOnTermInput: ["CreatedTime", "TermType", "TermName", "FK_User", "FK_School"],
  FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput: ["where", "update", "create"],
  FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput: ["where", "data"],
  FlowUpdateManyWithWhereWithoutFK_CourseOnTermInput: ["where", "data"],
  FlowScalarWhereInput: ["AND", "OR", "NOT", "FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTermID"],
  TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutFK_CourseOnTermInput: ["where", "data"],
  CourseCreateWithoutFK_SchoolInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_Professor", "CourseOnTerm"],
  CourseCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  CourseCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFK_SchoolInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Terms", "FK_Task"],
  UserCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  UserCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  ProfessorCreateWithoutFK_SchoolInput: ["FK_Courses", "Name", "Email"],
  ProfessorCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  ProfessorCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  TermCreateWithoutFK_SchoolInput: ["CreatedTime", "TermType", "TermName", "FK_User", "FK_CourseOnTerm"],
  TermCreateOrConnectWithoutFK_SchoolInput: ["where", "create"],
  TermCreateManyFK_SchoolInputEnvelope: ["data", "skipDuplicates"],
  CourseUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  CourseScalarWhereInput: ["AND", "OR", "NOT", "CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID", "FK_ProfessorID"],
  UserUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_SchoolID"],
  ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  ProfessorUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  ProfessorScalarWhereInput: ["AND", "OR", "NOT", "ProfessorID", "FK_SchoolID", "Name", "Email"],
  TermUpsertWithWhereUniqueWithoutFK_SchoolInput: ["where", "update", "create"],
  TermUpdateWithWhereUniqueWithoutFK_SchoolInput: ["where", "data"],
  TermUpdateManyWithWhereWithoutFK_SchoolInput: ["where", "data"],
  CourseCreateWithoutFK_ProfessorInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "CourseOnTerm"],
  CourseCreateOrConnectWithoutFK_ProfessorInput: ["where", "create"],
  CourseCreateManyFK_ProfessorInputEnvelope: ["data", "skipDuplicates"],
  SchoolCreateWithoutFK_ProfessorInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "Term"],
  SchoolCreateOrConnectWithoutFK_ProfessorInput: ["where", "create"],
  CourseUpsertWithWhereUniqueWithoutFK_ProfessorInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutFK_ProfessorInput: ["where", "data"],
  SchoolUpsertWithoutFK_ProfessorInput: ["update", "create"],
  SchoolUpdateWithoutFK_ProfessorInput: ["Name", "HasClassSupport", "SearchIndex", "TermType", "FK_Course", "FK_User", "Term"],
  CourseOnTermCreateWithoutFK_FlowsInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Term", "FK_Tasks"],
  CourseOnTermCreateOrConnectWithoutFK_FlowsInput: ["where", "create"],
  FlashCardStackCreateWithoutFK_FlowInput: ["CreatedTime", "FlashCards", "Title"],
  FlashCardStackCreateOrConnectWithoutFK_FlowInput: ["where", "create"],
  FlashCardStackCreateManyFK_FlowInputEnvelope: ["data", "skipDuplicates"],
  TaskCreateWithoutFK_FlowInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_CourseOnTerm"],
  TaskCreateOrConnectWithoutFK_FlowInput: ["where", "create"],
  TaskCreateManyFK_FlowInputEnvelope: ["data", "skipDuplicates"],
  CourseOnTermUpsertWithoutFK_FlowsInput: ["update", "create"],
  CourseOnTermUpdateWithoutFK_FlowsInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Term", "FK_Tasks"],
  FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput: ["where", "update", "create"],
  FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput: ["where", "data"],
  FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput: ["where", "data"],
  FlashCardStackScalarWhereInput: ["AND", "OR", "NOT", "FlashCardStackID", "CreatedTime", "FK_FlowID", "Title"],
  TaskUpsertWithWhereUniqueWithoutFK_FlowInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutFK_FlowInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutFK_FlowInput: ["where", "data"],
  FlowCreateWithoutFK_FlashCardStacksInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_Tasks"],
  FlowCreateOrConnectWithoutFK_FlashCardStacksInput: ["where", "create"],
  FlashCardCreateWithoutFK_FlashCardStackInput: ["CreatedTime", "Position", "Front", "Back"],
  FlashCardCreateOrConnectWithoutFK_FlashCardStackInput: ["where", "create"],
  FlashCardCreateManyFK_FlashCardStackInputEnvelope: ["data", "skipDuplicates"],
  FlowUpsertWithoutFK_FlashCardStacksInput: ["update", "create"],
  FlowUpdateWithoutFK_FlashCardStacksInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_Tasks"],
  FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput: ["where", "update", "create"],
  FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput: ["where", "data"],
  FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput: ["where", "data"],
  FlashCardScalarWhereInput: ["AND", "OR", "NOT", "FlashCardID", "CreatedTime", "FK_FlashCardStackID", "Position", "Front", "Back"],
  FlashCardStackCreateWithoutFlashCardsInput: ["CreatedTime", "FK_Flow", "Title"],
  FlashCardStackCreateOrConnectWithoutFlashCardsInput: ["where", "create"],
  FlashCardStackUpsertWithoutFlashCardsInput: ["update", "create"],
  FlashCardStackUpdateWithoutFlashCardsInput: ["CreatedTime", "FK_Flow", "Title"],
  TaskLabelCreateWithoutFK_TaskInput: ["CreatedTime", "Label"],
  TaskLabelCreateOrConnectWithoutFK_TaskInput: ["where", "create"],
  TaskLabelCreateManyFK_TaskInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFK_TaskInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Terms"],
  UserCreateOrConnectWithoutFK_TaskInput: ["where", "create"],
  FlowCreateWithoutFK_TasksInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_FlashCardStacks"],
  FlowCreateOrConnectWithoutFK_TasksInput: ["where", "create"],
  CourseOnTermCreateWithoutFK_TasksInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Term", "FK_Flows"],
  CourseOnTermCreateOrConnectWithoutFK_TasksInput: ["where", "create"],
  TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput: ["where", "update", "create"],
  TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput: ["where", "data"],
  TaskLabelUpdateManyWithWhereWithoutFK_TaskInput: ["where", "data"],
  TaskLabelScalarWhereInput: ["AND", "OR", "NOT", "TaskLabelID", "CreatedTime", "Label", "FK_TaskID"],
  UserUpsertWithoutFK_TaskInput: ["update", "create"],
  UserUpdateWithoutFK_TaskInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_School", "FK_Terms"],
  FlowUpsertWithoutFK_TasksInput: ["update", "create"],
  FlowUpdateWithoutFK_TasksInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_CourseOnTerm", "FK_FlashCardStacks"],
  CourseOnTermUpsertWithoutFK_TasksInput: ["update", "create"],
  CourseOnTermUpdateWithoutFK_TasksInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Term", "FK_Flows"],
  TaskCreateWithoutFK_TaskLabelInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_User", "FK_Flow", "FK_CourseOnTerm"],
  TaskCreateOrConnectWithoutFK_TaskLabelInput: ["where", "create"],
  TaskUpsertWithoutFK_TaskLabelInput: ["update", "create"],
  TaskUpdateWithoutFK_TaskLabelInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_User", "FK_Flow", "FK_CourseOnTerm"],
  TermCreateManyFK_UserInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_SchoolID"],
  TaskCreateManyFK_UserInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_FlowID", "FK_CourseOnTermID"],
  TermUpdateWithoutFK_UserInput: ["CreatedTime", "TermType", "TermName", "FK_School", "FK_CourseOnTerm"],
  TaskUpdateWithoutFK_UserInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_Flow", "FK_CourseOnTerm"],
  CourseOnTermCreateManyFK_TermInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_CourseID"],
  CourseOnTermUpdateWithoutFK_TermInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Course", "FK_Flows", "FK_Tasks"],
  CourseOnTermCreateManyFK_CourseInput: ["CourseOnTermID", "CreatedTime", "Index", "Color", "Nickname", "FK_TermID"],
  CourseOnTermUpdateWithoutFK_CourseInput: ["CreatedTime", "Index", "Color", "Nickname", "FK_Term", "FK_Flows", "FK_Tasks"],
  FlowCreateManyFK_CourseOnTermInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility"],
  TaskCreateManyFK_CourseOnTermInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_FlowID"],
  FlowUpdateWithoutFK_CourseOnTermInput: ["FlowID", "CreatedTime", "Type", "Title", "Body", "Visibility", "FK_FlashCardStacks", "FK_Tasks"],
  TaskUpdateWithoutFK_CourseOnTermInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_Flow"],
  CourseCreateManyFK_SchoolInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_ProfessorID"],
  UserCreateManyFK_SchoolInput: ["UserID", "CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility"],
  ProfessorCreateManyFK_SchoolInput: ["ProfessorID", "Name", "Email"],
  TermCreateManyFK_SchoolInput: ["TermID", "CreatedTime", "TermType", "TermName", "FK_UserID"],
  CourseUpdateWithoutFK_SchoolInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_Professor", "CourseOnTerm"],
  UserUpdateWithoutFK_SchoolInput: ["CreatedTime", "SetupStep", "SupabaseID", "Email", "Name", "Username", "ProfilePictureLink", "DefaultVisibility", "FK_Terms", "FK_Task"],
  ProfessorUpdateWithoutFK_SchoolInput: ["FK_Courses", "Name", "Email"],
  TermUpdateWithoutFK_SchoolInput: ["CreatedTime", "TermType", "TermName", "FK_User", "FK_CourseOnTerm"],
  CourseCreateManyFK_ProfessorInput: ["CourseID", "CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_SchoolID"],
  CourseUpdateWithoutFK_ProfessorInput: ["CreatedTime", "IsOfficial", "Term", "Code", "Title", "FK_School", "CourseOnTerm"],
  FlashCardStackCreateManyFK_FlowInput: ["FlashCardStackID", "CreatedTime", "Title"],
  TaskCreateManyFK_FlowInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_UserID", "FK_CourseOnTermID"],
  FlashCardStackUpdateWithoutFK_FlowInput: ["CreatedTime", "FlashCards", "Title"],
  TaskUpdateWithoutFK_FlowInput: ["TaskID", "CreatedTime", "Title", "Completed", "Description", "DueDate", "Type", "FK_TaskLabel", "FK_User", "FK_CourseOnTerm"],
  FlashCardCreateManyFK_FlashCardStackInput: ["FlashCardID", "CreatedTime", "Position", "Front", "Back"],
  FlashCardUpdateWithoutFK_FlashCardStackInput: ["CreatedTime", "Position", "Front", "Back"],
  TaskLabelCreateManyFK_TaskInput: ["TaskLabelID", "CreatedTime", "Label"],
  TaskLabelUpdateWithoutFK_TaskInput: ["CreatedTime", "Label"]
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

