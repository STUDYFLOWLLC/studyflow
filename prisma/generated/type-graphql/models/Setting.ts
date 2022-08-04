import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Setting", {
  isAbstract: true
})
export class Setting {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SettingID!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasSeenWelcomeMessage?: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: Date | null;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;
}
