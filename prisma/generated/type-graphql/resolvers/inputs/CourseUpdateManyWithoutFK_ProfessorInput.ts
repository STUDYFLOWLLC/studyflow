import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateManyFK_ProfessorInputEnvelope } from "../inputs/CourseCreateManyFK_ProfessorInputEnvelope";
import { CourseCreateOrConnectWithoutFK_ProfessorInput } from "../inputs/CourseCreateOrConnectWithoutFK_ProfessorInput";
import { CourseCreateWithoutFK_ProfessorInput } from "../inputs/CourseCreateWithoutFK_ProfessorInput";
import { CourseScalarWhereInput } from "../inputs/CourseScalarWhereInput";
import { CourseUpdateManyWithWhereWithoutFK_ProfessorInput } from "../inputs/CourseUpdateManyWithWhereWithoutFK_ProfessorInput";
import { CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput } from "../inputs/CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput";
import { CourseUpsertWithWhereUniqueWithoutFK_ProfessorInput } from "../inputs/CourseUpsertWithWhereUniqueWithoutFK_ProfessorInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateManyWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class CourseUpdateManyWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutFK_ProfessorInput], {
    nullable: true
  })
  create?: CourseCreateWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutFK_ProfessorInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpsertWithWhereUniqueWithoutFK_ProfessorInput], {
    nullable: true
  })
  upsert?: CourseUpsertWithWhereUniqueWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseCreateManyFK_ProfessorInputEnvelope, {
    nullable: true
  })
  createMany?: CourseCreateManyFK_ProfessorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  set?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  delete?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput], {
    nullable: true
  })
  update?: CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpdateManyWithWhereWithoutFK_ProfessorInput], {
    nullable: true
  })
  updateMany?: CourseUpdateManyWithWhereWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseScalarWhereInput[] | undefined;
}
