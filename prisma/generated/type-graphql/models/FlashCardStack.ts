import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FlashCard } from "../models/FlashCard";
import { Flow } from "../models/Flow";
import { FlashCardStackCount } from "../resolvers/outputs/FlashCardStackCount";

@TypeGraphQL.ObjectType("FlashCardStack", {
  isAbstract: true
})
export class FlashCardStack {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlashCardStackID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_Flow?: Flow | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlowID?: number | null;

  FlashCards?: FlashCard[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | null;

  @TypeGraphQL.Field(_type => FlashCardStackCount, {
    nullable: true
  })
  _count?: FlashCardStackCount | null;
}
