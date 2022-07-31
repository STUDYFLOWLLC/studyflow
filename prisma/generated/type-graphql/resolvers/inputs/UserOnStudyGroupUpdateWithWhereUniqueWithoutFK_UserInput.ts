import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupUpdateWithoutFK_UserInput } from "../inputs/UserOnStudyGroupUpdateWithoutFK_UserInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: UserOnStudyGroupUpdateWithoutFK_UserInput;
}
