import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateWithoutFK_UserInput } from "../inputs/UserOnStudyGroupCreateWithoutFK_UserInput";
import { UserOnStudyGroupUpdateWithoutFK_UserInput } from "../inputs/UserOnStudyGroupUpdateWithoutFK_UserInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: UserOnStudyGroupUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: UserOnStudyGroupCreateWithoutFK_UserInput;
}
