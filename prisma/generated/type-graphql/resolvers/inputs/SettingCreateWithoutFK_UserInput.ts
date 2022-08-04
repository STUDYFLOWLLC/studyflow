import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class SettingCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasSeenWelcomeMessage?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: Date | undefined;
}
