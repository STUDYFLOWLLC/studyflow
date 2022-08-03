import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FlashcardStack } from "../models/FlashcardStack";
import { Flow } from "../models/Flow";
import { Task } from "../models/Task";
import { RepetitionType } from "../enums/RepetitionType";
import { RepetitionCount } from "../resolvers/outputs/RepetitionCount";

@TypeGraphQL.ObjectType("Repetition", {
  isAbstract: true
})
export class Repetition {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RepetitionID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: false
  })
  RepetitionType!: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY";

  FK_Flow?: Flow | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID?: string | null;

  FK_FlashcardStack?: FlashcardStack | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID?: string | null;

  FK_Tasks?: Task[];

  @TypeGraphQL.Field(_type => RepetitionCount, {
    nullable: true
  })
  _count?: RepetitionCount | null;
}
