import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateManyFK_SchoolInputEnvelope } from "../inputs/CourseCreateManyFK_SchoolInputEnvelope";
import { CourseCreateOrConnectWithoutFK_SchoolInput } from "../inputs/CourseCreateOrConnectWithoutFK_SchoolInput";
import { CourseCreateWithoutFK_SchoolInput } from "../inputs/CourseCreateWithoutFK_SchoolInput";
import { CourseScalarWhereInput } from "../inputs/CourseScalarWhereInput";
import { CourseUpdateManyWithWhereWithoutFK_SchoolInput } from "../inputs/CourseUpdateManyWithWhereWithoutFK_SchoolInput";
import { CourseUpdateWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/CourseUpdateWithWhereUniqueWithoutFK_SchoolInput";
import { CourseUpsertWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/CourseUpsertWithWhereUniqueWithoutFK_SchoolInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseUpdateManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: CourseCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpsertWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  upsert?: CourseUpsertWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: CourseCreateManyFK_SchoolInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CourseUpdateWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  update?: CourseUpdateWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpdateManyWithWhereWithoutFK_SchoolInput], {
    nullable: true
  })
  updateMany?: CourseUpdateManyWithWhereWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseScalarWhereInput[] | undefined;
}
