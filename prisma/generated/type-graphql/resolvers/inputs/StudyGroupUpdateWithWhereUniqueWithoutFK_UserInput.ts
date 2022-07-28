import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupUpdateWithoutFK_UserInput } from "../inputs/StudyGroupUpdateWithoutFK_UserInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class StudyGroupUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyGroupUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: StudyGroupUpdateWithoutFK_UserInput;
}
