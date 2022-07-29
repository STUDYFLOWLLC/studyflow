import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateWithoutFK_UserInput } from "../inputs/StudyGroupCreateWithoutFK_UserInput";
import { StudyGroupUpdateWithoutFK_UserInput } from "../inputs/StudyGroupUpdateWithoutFK_UserInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class StudyGroupUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyGroupUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: StudyGroupUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => StudyGroupCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: StudyGroupCreateWithoutFK_UserInput;
}
