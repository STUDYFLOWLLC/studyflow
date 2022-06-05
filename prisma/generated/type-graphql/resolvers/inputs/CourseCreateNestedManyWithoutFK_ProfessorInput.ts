import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateManyFK_ProfessorInputEnvelope } from "../inputs/CourseCreateManyFK_ProfessorInputEnvelope";
import { CourseCreateOrConnectWithoutFK_ProfessorInput } from "../inputs/CourseCreateOrConnectWithoutFK_ProfessorInput";
import { CourseCreateWithoutFK_ProfessorInput } from "../inputs/CourseCreateWithoutFK_ProfessorInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedManyWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class CourseCreateNestedManyWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutFK_ProfessorInput], {
    nullable: true
  })
  create?: CourseCreateWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutFK_ProfessorInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseCreateManyFK_ProfessorInputEnvelope, {
    nullable: true
  })
  createMany?: CourseCreateManyFK_ProfessorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseWhereUniqueInput[] | undefined;
}
