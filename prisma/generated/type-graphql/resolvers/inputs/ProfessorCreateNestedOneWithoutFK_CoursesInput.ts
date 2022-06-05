import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateOrConnectWithoutFK_CoursesInput } from "../inputs/ProfessorCreateOrConnectWithoutFK_CoursesInput";
import { ProfessorCreateWithoutFK_CoursesInput } from "../inputs/ProfessorCreateWithoutFK_CoursesInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateNestedOneWithoutFK_CoursesInput", {
  isAbstract: true
})
export class ProfessorCreateNestedOneWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_CoursesInput, {
    nullable: true
  })
  create?: ProfessorCreateWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateOrConnectWithoutFK_CoursesInput, {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfessorWhereUniqueInput | undefined;
}
