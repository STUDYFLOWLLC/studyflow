import * as TypeGraphQL from "type-graphql";
import { FlashCard } from "../../../models/FlashCard";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { Flow } from "../../../models/Flow";
import { User } from "../../../models/User";
import { FlashCardStackFK_FlashcardsArgs } from "./args/FlashCardStackFK_FlashcardsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class FlashCardStackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() flashCardStack: FlashCardStack, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      where: {
        FlashCardStackID: flashCardStack.FlashCardStackID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() flashCardStack: FlashCardStack, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      where: {
        FlashCardStackID: flashCardStack.FlashCardStackID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlashCard], {
    nullable: false
  })
  async FK_Flashcards(@TypeGraphQL.Root() flashCardStack: FlashCardStack, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlashCardStackFK_FlashcardsArgs): Promise<FlashCard[]> {
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      where: {
        FlashCardStackID: flashCardStack.FlashCardStackID,
      },
    }).FK_Flashcards(args);
  }
}
