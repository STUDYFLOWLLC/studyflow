import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FlashCardStack } from "../models/FlashCardStack";

@TypeGraphQL.ObjectType("FlashCard", {
  isAbstract: true
})
export class FlashCard {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlashCardID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_FlashCardStack?: FlashCardStack | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlashCardStackID?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Front?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Back?: string | null;
}
