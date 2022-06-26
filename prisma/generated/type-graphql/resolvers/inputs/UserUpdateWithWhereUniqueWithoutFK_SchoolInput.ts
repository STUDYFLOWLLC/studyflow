import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutFK_SchoolInput } from "../inputs/UserUpdateWithoutFK_SchoolInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  data!: UserUpdateWithoutFK_SchoolInput;
}
