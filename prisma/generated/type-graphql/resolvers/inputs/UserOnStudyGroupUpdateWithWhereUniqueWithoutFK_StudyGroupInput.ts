import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupUpdateWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupUpdateWithoutFK_StudyGroupInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_StudyGroupInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_StudyGroupInput {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateWithoutFK_StudyGroupInput, {
    nullable: false
  })
  data!: UserOnStudyGroupUpdateWithoutFK_StudyGroupInput;
}
